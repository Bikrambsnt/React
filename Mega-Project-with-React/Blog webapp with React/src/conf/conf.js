
//this folder is to export or to process env file data more effectly instead of repeating in the main file we can do it here

const conf = {
 appWriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
 appWriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
 appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
 appWriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
 appWriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf

//Wrapped inside a String because env file should be processed in String so using String we can confirm that it will always return me string