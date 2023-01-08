import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavAll from "./NavAll";
import {Avatar, ThemeProvider} from "react-ui";
import {components, tokens} from "react-ui/themes/base";
import NavPet from "./NavPet";
import Footer from "./Footer";

export default function OneCategory() {

    // navbar ka saman
    const [click, setClick] = useState(false);
    const redirectToHome = () => setClick(false);


    const navigate = useNavigate();
    const createPost = (u) => {
        navigate('/FormAdopt',
            {
                state: {
                    petName: u,
                }
            });
    }

    const [userData,setUserData] = useState("")

    const fetchUserData = async () => {
        const resp = await axios.get("http://localhost:4000/api/pets/getAll")
        if(resp.data.length > 0) {
            setUserData(resp.data)
        }
    }




    const { state } = useLocation();
    const reqname = state.Cname

    useEffect(()=> {
        fetchUserData().then( )
        filterItem(reqname)
    })

    const filterItem = (reqname) => {
        const newItem = []
        for(let i = 0 ; i < userData.length ; i++) {
            if(userData[i].category.name === reqname) {
                newItem.push(userData[i])
            }
        }
        setUserData(newItem)
    }

    // const [breed,setBreed] = useState("")
    // const [color,setColor] = useState("")
    //
    // function callSearchBreed(breed) {
    //     const newItem1 = []
    //     // console.log(userData)
    //     console.log(breed)
    //     for(let i = 0 ; i < userData.length ; i++) {
    //         if(userData[i].breed === breed) {
    //             newItem1.push(userData[i])
    //         }
    //     }
    //     console.log(newItem1)
    //     setUserData(newItem1)
    //     setBreed("")
    // }
    // function callSearchColor(color) {
    //     const newItem1 = []
    //     // console.log(userData)
    //     console.log(breed)
    //     for(let i = 0 ; i < userData.length ; i++) {
    //         if(userData[i].color === color) {
    //             newItem1.push(userData[i])
    //         }
    //     }
    //     console.log(newItem1)
    //     setUserData(newItem1)
    //     setBreed("")
    // }



    return (
        <>
            <>
                {/*navbar */}
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="">
                                <ThemeProvider tokens={tokens} components={components}>
                                    <Avatar size="medium" src="https://github.com/sameen-shi.png" />
                                </ThemeProvider>
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
                                    {/*<input*/}
                                    {/*    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                                    {/*    id="breed" type="text" placeholder="Breed" value={breed} onChange={(event)=> setBreed(event.target.value)}/>*/}
                                    {/*/!*<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="">*!/*/}
                                    {/*<button*/}
                                    {/*    className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">*/}
                                    {/*        <span onClick={()=> {callSearchBreed(breed)}}>*/}
                                    {/*                Search By Breed*/}
                                    {/*        </span>*/}
                                    {/*</button>*/}
                                    {/*<input*/}
                                    {/*    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
                                    {/*    id="color" type="text" placeholder="color" value={color} onChange={(event)=> setColor(event.target.value)}/>*/}

                                    {/*<button*/}
                                    {/*    className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">*/}
                                    {/*        <span onClick={()=> {callSearchColor()}}>*/}
                                    {/*                Search By Color*/}
                                    {/*        </span>*/}
                                    {/*</button>*/}
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
            {/*main page*/}
            {/*<h1>{reqname}</h1>*/}
            <h2 className="mb-5 flex align-middle align-center justify-center" style={{'fontWeight' : 'bold' , 'fontSize' : '25px','fontStyle' : 'Serif'}} >{reqname.toUpperCase()}</h2>

            {userData && userData.map((user) => (

                <div className="w-full rounded-lg shadow-2xl lg:max-w-sm m-auto">
                    <div className="p-4 mt-8">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            {"Name : " + user.name}
                        </h4>
                        <p className="mb-2 leading-normal">
                            {"Age : " + user.age}
                        </p>
                        <p className="mb-2 leading-normal">
                            {"Breed : " + user.breed}
                        </p>
                        <p className="mb-2 leading-normal">
                            {"Color : " + user.color}
                        </p>
                        <p className="mb-2 leading-normal">
                            {"Label : " + user.imageLabel}
                        </p>
                        <p className="mb-2 leading-normal">
                            {"Owner : " + user.owner}
                        </p>
                        <p className="mb-2 leading-normal">
                            {"Owner Email : " + user.ownerEmail}
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            <span onClick={() => { createPost(user._id) }}>
                                    Adopt
                            </span>
                        </button>
                    </div>
                </div>
            ))}
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