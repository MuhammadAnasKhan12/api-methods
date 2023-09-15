import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import "./addcom.css"
import { Get, Post, Put } from "./apimethods";
export default function Addcomments() {
    const params = useParams();
    const [model, setModel] = useState<any>({})
    const getPost = () => {
        Get(`comments`)
            .then((res) => {
                setModel({...res.data})
            })
            .catch((err) => {
                console.log(err);
        })
    }
    const navigate = useNavigate();
    const updatepost = () => {
        Put(`comments/${params.id}`, model)
            .then((res) => {
                console.log("Post Updated Successfully: ", res.data)
            })
        navigate("/")
    }

    useEffect(() => {
        if (params.id) {
            getPost()
        }
    },[])
    const submitPost = () => {
        Post("comments", model)
            .then((res) => {
            console.log("Post Added Successfully: ",res.data)
            })
        navigate("/");

    };
  return (
    <div className="AddComment">
      <h2>Add Project</h2>
      <div className="FormContainer">
        <div className="FormField">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={model.name}
            onChange={(e) => setModel({ ...model, name: e.target.value })}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="FormField">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={model.body}
            onChange={(e) => setModel({ ...model, body: e.target.value })}
            placeholder="Body"
          ></textarea>
        </div>
        <div className="FormField">
          <label htmlFor="postid">Post ID:</label>
          <input
            id="postid"
            value={model.postId}
            onChange={(e) => setModel({ ...model, postId: e.target.value })}
            type="text"
            placeholder="Post ID"
          />
        </div>
        <div className="FormField">
          <label>ID:</label>
          <input
            id="id"
            value={model.id}
            onChange={(e) => setModel({ ...model, id: e.target.value })}
            type="text"
            placeholder="ID"
          />
        </div>
        <div className="FormField">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={model.email}
            onChange={(e) => setModel({ ...model, email: e.target.value })}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="FormField">
          {params.id ? (
            <button className="UpdateButton" onClick={updatepost}>
              Update
            </button>
          ) : (
            <button className="SubmitButton" onClick={submitPost}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
