/**
 * User class used by LoginComponent. No setter here
 * 
 * @export
 * @class User
 */
export class User {
  // clear password
  private password: string;
  // Username
  username: string;

  constructor(username: string, password: string) {
    this.password = password;
    this.username = username;
  }
  
  /**
   * Getter for username
   * 
   * @returns 
   * @memberof User
   */
  getUsername() {
    return this.username;
  }

  /**
   * Setter for username
   * 
   * @returns 
   * @memberof User
   */
  getPassword() {
    return this.password;
  }
}
