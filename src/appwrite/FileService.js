import AppwriteService, { ID } from './config';
export default class FileService extends AppwriteService {
  async createFile(BUCKET_ID, file) {
    try {
      return await this.storage.createFile(BUCKET_ID, ID.unique(), file);
    } catch (error) {
      console.log(error);
    }
  }
  async getFile(BUCKET_ID, FILE_ID) {
    try {
      return await this.storage.getFile(BUCKET_ID, FILE_ID);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteFile(BUCKET_ID, FILE_ID) {
    try {
      return await this.storage.deleteFile(BUCKET_ID, FILE_ID);
    } catch (error) {
      console.log(error);
    }
  }
  getFilePreview(BUCKET_ID,FILE_ID){
    try {
        return this.storage.getFilePreview(BUCKET_ID,FILE_ID)
    } catch (error) {
        console.log(error);
    }
  }
  getFileView(BUCKET_ID,FILE_ID){
    try {
        return this.storage.getFileView(BUCKET_ID,FILE_ID)
    } catch (error) {
        console.log(error);
    }
  }
}
