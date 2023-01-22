import {Avatar, ThemeProvider} from "react-ui";
import {components, tokens} from "react-ui/themes/base";
import {Link} from "react-router-dom";
import {useState} from "react";
import React from "react";

export default function NavAll() {

    const [click, setClick] = useState(false);
    const redirectToHome = () => setClick(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3 bg-[#800000]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <img className="rounded-[100px]" style={{ width: 50, height: 40 }} src="https://content.jdmagicbox.com/comp/mumbai/r8/022pxx22.xx22.170119124215.z8r8/catalogue/krupa-pets-kennel-borivali-east-mumbai-pet-shops-for-dog-n10087wxm2.jpg?clr=" alt="React Logo" />
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
                                        className="bg-white text-sm hover:bg-[#b8f272] text-[#964B00] font-bold hover:text-black py-3 px-5 border border-blue-500 hover:border-transparent rounded">
                                        <Link className="nav-item nav-link dropdown custom" to="/">
                                            Homeuuu
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
    )
}