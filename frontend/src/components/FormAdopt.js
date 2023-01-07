import React, {useState} from "react";
import axios from "axios";
export default function FormAdopt() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const submitData = async () => {
        const data = {
            firstName,
            lastName,
            email,
            address,
            phone,
        }
        console.log(data)
        setFirstName("")
        setLastName("")
        setEmail("")
        setAddress("")
        setPhone("")
        const res = await axios.post("http://localhost:4000/api/adoption/create" , data)
    }


    return(
        <div className="w-full max-w-xs m-auto ">
            <h1>adopt form</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
    )
}