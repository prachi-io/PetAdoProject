import React, {useEffect, useState} from "react";
import axios from "axios";
import NavCat from "./NavCat";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
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
            {/*style={{'backgroundColor' : '#fcccd4'}}*/}
            <div className="bg-[#FFCBA5] pt-5 pb-2">
                {userData && userData.map((user) => (
                    <button className="bg-[#eb4d4d] hover:bg-[#b82323] text-white font-bold py-2 px-4 rounded-lg m-auto m-20 ">
                    <span className="p-10" onClick={() => { createPost(user.name) }}>
                        <p className="text-3xl">{user.name}</p>
                        <br/>
                        {user._id}
                    </span>
                    </button>
                ))}
            </div>
            {/*<Footer/>*/}

            <footer
                className="mb-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#800000]" style={{
                "left": "0",
                "bottom": "0",
                "width": "100%",
                "color": "white",
                "textAlign": "center"}}>
    <span className="text-sm  sm:text-center text-white-400">© 2023 <a href="https://flowbite.com/"
                                                                       className="hover:underline">PetAdo</a>. All Rights Reserved.
    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-white-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className=" text-white-400 mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className=" text-white-400 mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className=" text-white-400 hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}