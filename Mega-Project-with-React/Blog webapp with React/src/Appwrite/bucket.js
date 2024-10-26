import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  //create Post

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug, //am taking slug as a Document Id
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        } //following the appwrite database docs
      );
    } catch (error) {
      throw error;
    }
  }

  //update post

  async updatePost(slug, { title, content, featuredImage, status }) {
    //I want the document Id at first before the obj pass so I have kept it outside

    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  //delete Post

  async deletePost(slug) {
    try {
      //no need to return here bcause what to return after delete... yeah we can return delete message

      await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true; //handle this in frontend
    } catch (error) {
      console.log("Delete post error", error);
      return false;
    }
  }

  //gettting Single post

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error on Single Post", error);
      return false;
    }
  }

  //get all post

  //  async listPost () {
  //     try {

  //         await this.databases.listDocuments(
  //             conf.appWriteDatabaseId,
  //             conf.appWriteCollectionId,
  //         )

  //     } catch (error) {
  //         console.log('Error on List Post' ,error)
  //     }
  //  }

  //TO get all the values I cant directly do this code because it will give me all the values along with status inactive so to fix this I will write a query for that

  async getPosts(queries = [Query.equal("status", "active")]) {
    //here status is a key which we have cretaed in database index and active is the status

    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries // the queries added here
        //we can do this also
        // [Query.equal("status", "active")] if we do this then we have to remove it from the getPosts parameter....
      );
    } catch (error) {
      console.log("Error on Get Posts", error);
      return false; //if everything fails then at least we will get this message
    }
  }

  //File Upload service
   async fileUpload(file){

    try {
        
        return await this.storage.createFile(
            conf.appWriteBucketId,
            ID.unique(),
            file //file is from the parameter... to check weather file is uploaded or not
        )

    } catch (error) {
        console.log('Error on file Upload' , error);
        return false;
        
    }

    
} 

//File  Delete Service

        async deleteFile(fileId) {
            //this fileId we will get while uploading the file in a file parameter

            try {
               await this.storage.deleteFile(
                    conf.appWriteBucketId,
                    fileId
                )
                return true;
                
            } catch (error) {
                console.log("Error on Delete File" , error);
                return false;
                
            }

        }

    //File Preview
        //no need to add this in a async because its response is already fast...
        
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )

    }


}

const service = new Service();

export default service;

//Now lets build redux store

