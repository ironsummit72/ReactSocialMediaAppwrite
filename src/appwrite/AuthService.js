import AppwriteService from './config';

export default class AuthService extends AppwriteService {
  async getCurrentUserAccount() {
    return await this.account.get();
  }
  async createUserAccount(username, fullName, email, password) {
    return await this.account.create(username, email, password, fullName);
  }
  async login(email, password) {
    return await this.account.createEmailSession(email, password);
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  }
  async listSessions() {
    try {
      return await this.account.listSessions();
    } catch (error) {
      console.log(error);
    }
  }
}
