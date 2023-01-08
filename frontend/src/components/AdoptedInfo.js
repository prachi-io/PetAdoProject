import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import NavAll from "./NavAll";
import Footer from "./Footer";

export default function AdoptedInfo() {

    const [userData,setUserData] = useState("")

    const fetchUserData = async () => {
        const resp = await axios.get("http://localhost:4000/api/adoption/getAll")
        if(resp.data.length > 0) {
            setUserData(resp.data)
            console.log(resp.data)
        }
    }


    useEffect(()=> {
        fetchUserData().then( )
        console.log(userData)
    })


    return (
        <>
            <NavAll/>
            <div className="bg-[#FFCBA5] pt-4 pb-2 mt-0">
                {userData && userData.map((user) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm m-auto mt-5 mb-5 bg-white">
                        <div className="p-4">
                            <h4 className="text-black-200 text-xl font-semibold tracking-tight ">
                                {user.firstName +" "+ user.lastName}
                            </h4>
                        </div>
                    </div>
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