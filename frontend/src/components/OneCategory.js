import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function OneCategory() {

    const [userData,setUserData] = useState("")

    const fetchUserData = async () => {
        const resp = await axios.get("http://localhost:4000/api/pets/getAll")
        if(resp.data.length > 0) {
            setUserData(resp.data)
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);
    console.log(userData)


    return (
        <>
            {userData && userData.map((user) => (

                <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            {user.name}
                        </h4>
                        <p className="mb-2 leading-normal">
                            {user.breed}
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Adopt
                        </button>
                    </div>
                </div>
            ))}

        </>
    )
}