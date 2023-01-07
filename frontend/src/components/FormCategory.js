import React, {useState} from "react";
import axios from "axios";
import NavAll from "./NavAll";


export default function FormCategory() {

    const [name, setName] = useState('');

    const submitData = async () => {
        const data = {
            name
        }
        console.log(data)
        setName("")
        const res = await axios.post("http://localhost:4000/api/category/create" , data)
    }

    return(
        <>
            <NavAll/>
            <div className="w-full max-w-xs m-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Name" value={name} onChange={(event)=> setName(event.target.value)}/>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" onClick={submitData}>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}