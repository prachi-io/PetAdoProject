import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Route, Link} from "react-router-dom";
import {  Routes } from "react-router-dom";
import {Avatar,ThemeProvider} from "react-ui";
import { tokens, components } from 'react-ui/themes/base'
import FormPet from "./FormPet";

export default function Navbar() {


    const [click, setClick] = useState(false);
    const redirectToFormPet = () => setClick(false);

    const [click1, setClick1] = useState(false);
    const redirectToAllCategory = () => setClick1(false);

    const [click2, setClick2] = useState(false);
    const redirectToAdoptedInfo = () => setClick2(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex  justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <ThemeProvider tokens={tokens} components={components}>
                            <Avatar size="medium" src="https://github.com/sameen-shi.png" />
                        </ThemeProvider>
                        <h2 className="font-bold text-2xl" style={{'color' : 'white'}}>
                            PetAdo
                        </h2>
                        {/*<button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">*/}
                        {/*    <span className="block relative w-6 h-px rounded-sm bg-white"></span>*/}
                        {/*    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>*/}
                        {/*    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>*/}
                        {/*</button>*/}
                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="">

                                    <button
                                        className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        <Link
                                            to='/AdoptedInfo'
                                            className='nav-links'
                                            onClick={redirectToAdoptedInfo}
                                        >
                                            Past Adoptors
                                        </Link>
                                    </button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="">

                                    <button
                                        className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        <Link
                                            to='/FormPet'
                                            className='nav-links'
                                            onClick={redirectToFormPet}
                                        >
                                            Add a pet
                                        </Link>
                                    </button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="">
                                    <button
                                        className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        <Link
                                            to='/AllCategory'
                                            className='nav-links'
                                            onClick={redirectToAllCategory}
                                        >
                                            Adopt a pet
                                        </Link>
                                    </button>
                                </a>
                            </li>
                            {/*<Routes>*/}
                            {/*    <Route path="/formpet" element={<FormPet />} />*/}
                            {/*</Routes>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}