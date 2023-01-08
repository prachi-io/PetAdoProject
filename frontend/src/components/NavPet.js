import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavAll from "./NavAll";
import {Avatar, ThemeProvider} from "react-ui";
import {components, tokens} from "react-ui/themes/base";

export default function NavPet() {

    // home pe jane ke liye
    const [click, setClick] = useState(false);
    const redirectToHome = () => setClick(false);

    // fetch data as id pass karre h hum
    const [userData,setUserData] = useState("")

    const fetchUserData = async () => {
        const resp = await axios.get("http://localhost:4000/api/pets/getAll")
        if(resp.data.length > 0) {
            setUserData(resp.data)
        }
    }

    // reqname leke aao vaha se
    const filterItem = (reqname) => {
        const newItem = []
        for(let i = 0 ; i < userData.length ; i++) {
            if(userData[i].category.name === reqname) {
                newItem.push(userData[i])
            }
        }
        setUserData(newItem)
    }

    const [breed,setBreed] = useState("")
    const [color,setColor] = useState("")

    function callSearchBreed(breed) {
        const newItem1 = []
        // console.log(userData)
        console.log(breed)
        for(let i = 0 ; i < userData.length ; i++) {
            if(userData[i].breed === breed) {
                newItem1.push(userData[i])
            }
        }
        console.log(newItem1)
        setUserData(newItem1)
        setBreed("")
    }

    function callSearchColor() {
        const newItem1 = []
        // console.log(userData)
        console.log(color)
        for(let i = 0 ; i < userData.length ; i++) {
            if(userData[i].color === color) {
                newItem1.push(userData[i])
            }
        }
        console.log(newItem1)
        setUserData(newItem1)
        setColor("")
    }

    return(
        <>
            {/*navbar */}
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="">
                            <img className="rounded-[100px]" style={{ width: 50, height: 40 }} src="https://content.jdmagicbox.com/comp/mumbai/r8/022pxx22.xx22.170119124215.z8r8/catalogue/krupa-pets-kennel-borivali-east-mumbai-pet-shops-for-dog-n10087wxm2.jpg?clr=" alt="React Logo" />
                        </a>
                        {/*<button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">*/}
                        {/*    <span className="block relative w-6 h-px rounded-sm bg-white"></span>*/}
                        {/*    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>*/}
                        {/*    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>*/}
                        {/*</button>*/}
                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">
                            <li className="nav-item">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="breed" type="text" placeholder="Breed" value={breed} onChange={(event)=> setBreed(event.target.value)}/>
                                {/*<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="">*/}
                                <button
                                    className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            <span onClick={()=> {callSearchBreed(breed)}}>
                                                    Search By Breed
                                            </span>
                                </button>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="color" type="text" placeholder="color" value={color} onChange={(event)=> setColor(event.target.value)}/>

                                <button
                                    className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            <span onClick={()=> {callSearchColor()}}>
                                                    Search By Color
                                            </span>
                                </button>
                                <button
                                    className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    <Link
                                        to='/'
                                        className='nav-links'
                                        onClick={redirectToHome}
                                    >
                                        Home
                                    </Link>
                                </button>
                                {/*</a>*/}
                            </li>
                            {/*<Routes>*/}
                            {/*    <Route path="/formpet" element={<FormPet />} />*/}
                            {/*</Routes>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}