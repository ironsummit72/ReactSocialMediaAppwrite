const envconf = {
  appWriteEndPoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appWriteProject: import.meta.env.VITE_APPWRITE_PROJECTID,
  appWriteDatabase: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appWriteCollectionIdPost: import.meta.env.VITE_APPWRITE_COLLECTION_ID_POSTS,
  appWriteCollectionIdUsers: import.meta.env.VITE_APPWRITE_COLLECTION_ID_USERS,
  appWriteBucketIdUsersPost: import.meta.env.VITE_APPWRITE_BUCKET_ID_USER_POSTS,
  appWriteBucketIdUsersProfile: import.meta.env.VITE_APPWRITE_BUCKET_ID_USER_PROFILE
};
export default envconf;
