import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{

   client = new Client;
   databases;
   storage;


   constructor(){
    this.client
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectId);
    this.databases =new Databases(this.client)
    this.storage = new Storage(this.client);



   }

   //create Post

   async createPost ({title,slug,content,featuredImage,status,userId}){

    try {
        
       return await this.databases.createDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,//am taking slug as a Document Id
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

   async updatePost (slug ,{title,content,featuredImage,status}){
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
                status
            })

    } catch (error) {
        throw error
    }

   }

   //delete Post

   async deletePost(slug){

    try {
        //no need to return here bcause what to return after delete... yeah we can return delete message

         await this.databases.deleteDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId, 
            slug)
            return true //handle this in frontend
    } catch (error) {
         console.log('Delete post error' , error)
        return false
    }

   }

}

const service = new Service();

export default service