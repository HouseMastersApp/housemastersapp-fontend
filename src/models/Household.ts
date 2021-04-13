export default class Household  {
  name: string
  description: string
  inviteCode: string

  constructor (
    name: string,
    description: string,
    inviteCode: string
  ) {
    this.name = name;
    this.description = description;
    this.inviteCode = inviteCode;
  }

  /**
   * 
   */
  isValid() {
    return true;
  }
}