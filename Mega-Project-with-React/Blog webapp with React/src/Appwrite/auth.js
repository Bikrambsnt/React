//The authentication service building here
//The process and guide is available at docs - https://appwrite.io/docs/products/auth/quick-start.

import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

//starting with signUp or account creation same docs code can also be used but am using class for more quality code

export class AuthService {
  //creating properties

  client = new Client();
  account; //creating this variable to get the object in clien by creating constructor in  which we will pass endpoint and set point

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setEndpoint(conf.appWriteProjectId);
    this.account = new Account(this.client);
    //same thing doing as on appwrite docs but using a class .
  }

  //Creating user Account

  async createAccount({email, password,name}) {
    //Here I am using ({}) obj in parenthesses this process is call destructing so can I can access obj without using . dot everywhere
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call the method to login the user if account creation is successfull.
       return  this.userLogin({email,password})
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error; //we can handle this error better but in backend it works fine.
    }
  }

  //user login

  async userLogin({email,password}) {
    try {
      return await this.account.createEmailPasswordSession(email,password);
    } catch (error) {
      throw error;
    }
  }

  //Check if the user is already logged in or not.

  async getCurrentUser(){
    try {

      return await this.account.get();
        
    } catch (error) {
        console.log("Error on Get Current User" , error)
    }

    //if there is no any account then 
    return null;
  }

  //user Logout
  async userLoggedOut(){

    try {
        await this.account.deleteSessions();
        
    } catch (error) {
        console.log("Error on User Logout" , error)
    }
  }
}

const authService = new AuthService();

export default authService; //here I have export the obj so we can access this  obj method easily using '.'


//Now the best thing is that , I can access all the properties of the obj authService using dot like authService.userLoggedOut and I will get all the properties of userLoggedOut
