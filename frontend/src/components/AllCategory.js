import React, {useEffect, useState} from "react";
import axios from "axios";
import NavCat from "./NavCat";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function AllCategory() {

    const [userData,setUserData] = useState("")

    const fetchUserData = async () => {
        const resp = await axios.get("http://localhost:4000/api/category/all")
        if(resp.data.length > 0) {
            setUserData(resp.data)
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);
    console.log(userData)

    const navigate = useNavigate();
    const createPost = (u) => {
        navigate('/OneCategory',
            {
                state: {
                    Cname: u,
                }
            });
    }


    return(
        <> <NavCat/>
            {userData && userData.map((user) => (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto m-20">
                    <span onClick={() => { createPost(user.name) }}>
                        {user.name}
                        <br/>
                        {user._id}
                    </span>
                </button>
        ))}
        </>
    )
}