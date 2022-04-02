// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract StakePool {
    using SafeERC20 for IERC20;

    IERC20 public stakeToken;

    uint256 private _totalSupply;
    mapping(address => uint256) private _balances;

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function stake(uint256 amount) public virtual {
        _totalSupply += amount;
        _balances[msg.sender] += amount;
        stakeToken.safeTransferFrom(msg.sender, address(this), amount);
    }

    function withdraw(uint256 amount) public virtual {
        _totalSupply -= amount;
        _balances[msg.sender] -= amount;
        stakeToken.safeTransfer(msg.sender, amount);
    }
}

contract DustStakePool is StakePool {
    using SafeERC20 for IERC20;

    uint256 public cooldownSeconds;
    uint256 public unstakeWindow;

    uint256 public startTime;
    uint256 public periodFinish = 0;
    uint256 public rewardRate = 0;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;
    // staker => cooldown
    mapping(address => uint256) public cooldowns;

    IERC20 public yieldToken;
    address public admin;

    event RewardAdded(uint256 reward);
    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);
    event Cooldown(address indexed user);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    constructor(
        address _stakeToken,
        address _yieldToken,
        uint256 _startTime,
        uint256 _cooldownSeconds,
        uint256 _unstakeWindow
    ) {
        admin = msg.sender;
        stakeToken = IERC20(_stakeToken);
        yieldToken = IERC20(_yieldToken);
        startTime = _startTime;
        cooldownSeconds = _cooldownSeconds;
        unstakeWindow = _unstakeWindow;
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = lastTimeRewardApplicable();
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }

    function lastTimeRewardApplicable() public view returns (uint256) {
        return Math.min(block.timestamp, periodFinish);
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalSupply() == 0) {
            return rewardPerTokenStored;
        }
        return
            rewardPerTokenStored + ((lastTimeRewardApplicable() - lastUpdateTime) * rewardRate * 1e18) / totalSupply();
    }

    function earned(address account) public view returns (uint256) {
        return (balanceOf(account) * (rewardPerToken() - userRewardPerTokenPaid[account])) / 1e18 + rewards[account];
    }

    function stake(uint256 amount) public override updateReward(msg.sender) checkStart {
        require(amount > 0, "Cannot stake 0");
        super.stake(amount);
        cooldowns[msg.sender] = 0;
        emit Staked(msg.sender, amount);
    }

    function cooldown() public {
        require(balanceOf(msg.sender) > 0, "Invalid balance on cooldown");
        cooldowns[msg.sender] = block.timestamp;
        emit Cooldown(msg.sender);
    }

    function withdraw(uint256 amount) public override updateReward(msg.sender) checkStart {
        require(amount > 0, "Cannot withdraw 0");
        uint256 cooldownStart = cooldowns[msg.sender];
        require(block.timestamp > cooldownStart + cooldownSeconds, "Not cooldown");
        require(block.timestamp <= cooldownStart + cooldownSeconds + unstakeWindow, "Withdrawal expired");
        super.withdraw(amount);
        cooldowns[msg.sender] = 0;
        emit Withdrawn(msg.sender, amount);
    }

    // function exit() external {
    //     withdraw(balanceOf(msg.sender));
    //     getReward();
    // }

    function getReward() public updateReward(msg.sender) checkStart {
        uint256 reward = earned(msg.sender);
        if (reward > 0) {
            rewards[msg.sender] = 0;
            yieldToken.safeTransfer(msg.sender, reward);
            emit RewardPaid(msg.sender, reward);
        }
    }

    modifier checkStart() {
        require(block.timestamp >= startTime, "Not start");
        _;
    }

    function notifyRewardAmount(uint256 reward, uint256 duration) external updateReward(address(0)) onlyAdmin {
        require(duration > 0, "Duration is 0");

        if (block.timestamp > startTime) {
            if (block.timestamp >= periodFinish) {
                rewardRate = reward / duration;
            } else {
                uint256 remaining = periodFinish - block.timestamp;
                uint256 leftover = remaining * rewardRate;
                rewardRate = (reward + leftover) / duration;
            }
            lastUpdateTime = block.timestamp;
            periodFinish = block.timestamp + duration;
            emit RewardAdded(reward);
        } else {
            rewardRate = reward / duration;
            lastUpdateTime = startTime;
            periodFinish = startTime + duration;
            emit RewardAdded(reward);
        }
    }
}
