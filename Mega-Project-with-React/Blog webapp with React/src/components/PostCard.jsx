//This component is used to display the image preview after login in front page.....

import React from "react";
import service from "../Appwrite/bucket";

import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  //Here id has been written as ${$id} beacuse its a variable from appwrite so we are just taking what they are proviiding us
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </Link>
  );
}

export default PostCard;
