export default class User {

  id: Number | null
  name: string
  email: string
  sessionID: string

  constructor (
    id: Number | null,
    name: string,
    email: string,
    sessionID: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.sessionID = sessionID;
  }

  /**
   * 
   */
  isValid() {
    return true;
  }
}