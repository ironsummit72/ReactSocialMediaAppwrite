import AppwriteService, { ID } from './config';

export default class AuthService extends AppwriteService {
  async getCurrentUserAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async createUserAccount(username, email, password) {
    try {
      return await this.account.create(ID.unique(), email, password, username);
    } catch (error) {
      console.log(error);
    }
  }
  async login(email,password){
    try {
        return await this.account.createEmailSession(email,password);
    } catch (error) {
        console.log(error);
    }
  }
  async logout(){
    try {

      return await this.account.deleteSessions()

    } catch (error) {

      console.log(error);
    }
  }
  async listSessions()
  {
    try {
      return await this.account.listSessions();
    } catch (error) {
      console.log(error);
    }
  }
  
}
