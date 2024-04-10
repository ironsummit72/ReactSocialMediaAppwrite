import envconf from '@/conf/envConf';
import { Client, Account, Databases, Storage } from 'appwrite';
export default class AppwriteService {
  client = new Client();
  databases = new Databases(this.client);
  account = new Account(this.client);
  storage = new Storage(this.client);

  constructor() {
    this.client.setEndpoint(envconf.appWriteEndPoint).setProject(envconf.appWriteProject); // Replace with your project ID
  }
}


export { ID } from 'appwrite';
