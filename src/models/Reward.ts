export default class Reward  {
  name: string
  description: string
  date: Date
  quantity: number

  constructor (
    name: string,
    description: string,
    date: Date,
    quantity: number
    ) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.quantity = quantity;
  }

  /**
   * 
   */
  isValid() {
    return true;
  }
}