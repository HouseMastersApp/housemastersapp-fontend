import Reward from "./Reward";

export default class Progress  {
  weekNumber: number
  reward: Reward

  constructor (
      weekNumber: number,
      reward: Reward
    ) {
    this.weekNumber = weekNumber;
    this.reward = reward;
  }

  /**
   * 
   */
  isValid() {
    return true;
  }
}