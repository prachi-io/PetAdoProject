import React, {useState} from "react";
import axios from "axios";
import NavAll from "./NavAll";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

export default function FormCategory() {

    const [name, setName] = useState('');
    const navigate = useNavigate();

    const submitData = async () => {
        const data = {
            name
        }
        console.log(data)
        setName("")
        const res = await axios.post("http://localhost:4000/api/category/create" , data)
        navigate('/AllCategory');

    }

    return(
        <>
            <NavAll/>
            <div className="bg-[#B8E3FF] pt-5 pb-16 mt-0 mb-0">
            <div className="w-full max-w-xs m-auto pb-16">
                <form className="bg-blue-400 shadow-md rounded px-8 pt-16 pb-4 mb-4 mt-20" >
                    <h2 className="mb-10 flex align-middle align-center justify-center" style={{'fontWeight' : 'bold' , 'fontSize' : '25px'}} >FORM CATEGORY</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Name" value={name} onChange={(event)=> setName(event.target.value)}/>
                    </div>

                    <div className="mt-10 flex items-center align-middle justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" onClick={submitData}>
                            Add
                        </button>
                    </div>
                </form>
            </div>
            </div>
            <Footer/>
        </>

    )
}