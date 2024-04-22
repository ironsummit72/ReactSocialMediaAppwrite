import envconf from '@/conf/envConf';
import AppwriteService, { ID, Query } from './config';


export default class UserService extends AppwriteService {
  async createUser(username,name) {
    try {
      return await this.databases.createDocument(
        envconf.appWriteDatabase,
        envconf.appWriteCollectionIdUsers,
        ID.unique(),
        { username: username,name: name}
      );
    } catch (err) {
      console.log(err);
    }
  }
async checkUserDisplay(username) {
return await this.databases.listDocuments(envconf.appWriteDatabase,envconf.appWriteCollectionIdUsers,[ Query.equal('username', `${username}`)])
}
}
