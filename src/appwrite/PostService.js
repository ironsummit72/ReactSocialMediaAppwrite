import envconf from '@/conf/envConf';
import AppwriteService, { ID, Query } from './config';

export default class PostService extends AppwriteService {
  createPost() {}
  async setDisplayPicture(imageFile, userId) {
    const fileResponse = await this.storage.createFile(
      envconf.appWriteBucketIdUsersProfile,
      ID.unique(),
      imageFile
    );
    const documentId = await this.databases.listDocuments(
      envconf.appWriteDatabase,
      envconf.appWriteCollectionIdUsers,
      [Query.equal('username', userId)]
    );
    const dbResponse = await this.databases.updateDocument(
      envconf.appWriteDatabase,
      envconf.appWriteCollectionIdUsers,
      documentId.documents[0].$id,
      { displayPictureFileId: fileResponse.$id }
    );
    return dbResponse;
  }
  async setCoverPicture(imageFile, userId) {
    const fileResponse = await this.storage.createFile(
      envconf.appWriteBucketIdUsersProfile,
      ID.unique(),
      imageFile
    );
    const documentId = await this.databases.listDocuments(
      envconf.appWriteDatabase,
      envconf.appWriteCollectionIdUsers,
      [Query.equal('username', userId)]
    );
    const dbResponse = await this.databases.updateDocument(
      envconf.appWriteDatabase,
      envconf.appWriteCollectionIdUsers,
      documentId.documents[0].$id,
      { coverPictureFileId: fileResponse.$id }
    );
    return dbResponse;
  }
  createReel() {}
  async getProfilePicture(username){
    
    try {
      const fileId=await this.databases.listDocuments(envconf.appWriteDatabase,envconf.appWriteCollectionIdUsers,[Query.equal('username', username)]) 
      return this.storage.getFileView(envconf.appWriteBucketIdUsersProfile, fileId.documents[0].displayPictureFileId);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async getCoverPicture(username){
    try {
      const fileId=await this.databases.listDocuments(envconf.appWriteDatabase,envconf.appWriteCollectionIdUsers,[Query.equal('username', username)])
      return this.storage.getFileView(envconf.appWriteBucketIdUsersProfile, fileId.documents[0].coverPictureFileId);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
