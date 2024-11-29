
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import {Button,Input,Select,RTE} from '../index'
import service from "../../Appwrite/bucket";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function PostForm(post) { // here post is to provide the value according to user need ...

    const {register, handleSubmit,watch ,setValue,control,getValues} = useForm({
        //watch this allows to continously motinoring on a form field
        //setValue to set the values in form
        //control to get the control of form this same control will be passed in RTE to get the value from it.
        //getValues to grab the values of form
        defaultValues:{
            title:post?.title || '',
            slug:post?.slug || '' , // if slug is present in post give it or keep it empty
            content:post?.content || '', //if content is present in post give it or keep it empty
            status:post?.status || 'active', //
        },
    })
    
    const navigate = useNavigate();
    const userData =useSelector(state=> state.user.userData)

    //submit form

    const submit = async (data) =>{

        //now 2 condition arries post is available and post is notavailable
         //post is there then we will just update
        if(post){
         const file=  data.image[0] ? service.fileUpload(data.image[0]): null
         
        if(file){
            service.deleteFile(post.featuredImage)
        }
        //now with this if post is there then we can able to upload and delete it

        const dbPost = await service.updatePost(post.$id,
            {
                ...data,
                //overwritting the Featured Image
                featuredImage:file ? file.$id :undefined,

            })
            //now navigate the user
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        
      } else{
        //Now if user wants to  create new file then
         const file = await service.fileUpload(data.image[0])

         if(file){
            const fileId = file.$id
            data.featuredImage=fileId
          const dbPost=  await service.createPost({
                ...data,
                userId:userData.$id,
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
         }
      }
        
        
    }

        //Slug transform
        //here slug will be generated with title..

        const slugTransform = useCallback((value)=>{
            if(value && typeof value === 'string') return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d]+/g, '-')
                //here ^ it means negate meaning except this like ! and g meaning global , now when I enter anything except above regex in input field then it will be replaced by '-'

            return '' //if nothing matches then return empty str.
        },[])

        React.useEffect(()=>{
            const subscription = watch((value ,{name})=>{
                if(value === 'title'){
                    setValue('slug',slugTransform(value.title,{
                        shouldValidate: true
                    }))
                }
            })

            //in useEffect we get call back on return also
            return ()=>{
                subscription.unsubscribe() //for handling useEffect method
            }
        },[watch,setValue,slugTransform])

     return (
        <div></div>
     )
}


export default PostForm()