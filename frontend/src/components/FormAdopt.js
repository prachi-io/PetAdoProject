import React, {useState} from "react";
import axios from "axios";
import { useLocation,useNavigate } from 'react-router-dom';
import NavAll from "./NavAll";
import Footer from "./Footer";
export default function FormAdopt() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const { state } = useLocation();
    console.log(state)
    const reqPetId = state.petName
    console.log(reqPetId)

    const submitData = async () => {
        const data = {
            firstName,
            lastName,
            email,
            address,
            phone,
            pet:reqPetId
        }
        console.log(data)
        setFirstName("")
        setLastName("")
        setEmail("")
        setAddress("")
        setPhone("")
        const res = await axios.post("http://localhost:4000/api/adoption/create" , data)
        const r = await axios.delete("http://localhost:4000/api/pets/delete/" + reqPetId)
    }




    return(
        <>
            <NavAll/>
            {/*<h1>{reqPetId}</h1>*/}
            <div className="w-full max-w-xs m-auto ">
                <form className="mt-5   bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="mb-10 flex align-middle align-center justify-center" style={{'fontWeight' : 'bold' , 'fontSize' : '25px'}} >FORM ADOPT</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName" type="text" placeholder="First Name" value={firstName} onChange={(event)=> setFirstName(event.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(event)=> setLastName(event.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address" type="text" placeholder="Address" value={address} onChange={(event)=> setAddress(event.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone" type="text" placeholder="Phone Number" value={phone} onChange={(event)=> setPhone(event.target.value)}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" onClick={submitData}>
                            Adopt
                        </button>
                    </div>
                </form>
            </div>
            {/*<Footer/>*/}

            <footer
                className="mb-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-pink-500" style={{
                "left": "0",
                "bottom": "0",
                "width": "100%",
                "color": "white",
                "textAlign": "center"}}>
    <span className="text-sm  sm:text-center text-white-400">© 2023 <a href="https://flowbite.com/"
                                                                       className="hover:underline">Flowbite™</a>. All Rights Reserved.
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