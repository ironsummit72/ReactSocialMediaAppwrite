import envconf from '@/conf/envConf';
import AppwriteService, { ID, Query } from './config';


export default class PostService extends AppwriteService {
  createPost() {}
 async setDisplayPicture(imageFile,userId) {
    const fileResponse=await this.storage.createFile(envconf.appWriteBucketIdUsersProfile,ID.unique(),imageFile);
    const documentId=await this.databases.listDocuments(envconf.appWriteDatabase,envconf.appWriteCollectionIdUsers,[ Query.equal('username',userId),])
    const dbResponse =await this.databases.updateDocument(envconf.appWriteDatabase,envconf.appWriteCollectionIdUsers,documentId.documents[0].$id,{displayPictureFileId:fileResponse.$id})
   return dbResponse
    
  }
  async setCoverPicture(imageFile,userId) {
    const fileResponse=await this.storage.createFile(envconf.appWriteBucketIdUsersProfile,ID.unique(),imageFile);
    const documentId=await this.databases.listDocuments(envconf.appWriteDatabase,envconf.appWriteCollectionIdUsers,[ Query.equal('username',userId),])
    const dbResponse =await this.databases.updateDocument(envconf.appWriteDatabase,envconf.appWriteCollectionIdUsers,documentId.documents[0].$id,{coverPictureFileId:fileResponse.$id})
   return dbResponse
  }
  createReel() {}
}
