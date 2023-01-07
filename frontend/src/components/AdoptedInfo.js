import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import NavAll from "./NavAll";

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
            {userData && userData.map((user) => (
                <div className="w-full rounded-lg shadow-md lg:max-w-sm m-auto">
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            {user.firstName + user.lastName}
                        </h4>
                    </div>
                </div>
            ))}
        </>
    )
}