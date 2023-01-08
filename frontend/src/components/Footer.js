import React from "react";

export default function Footer() {
    return(
        <>
            {/*hey i am footer*/}

            <footer
                className="mb-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#800000]" style={{"position": "fixed",
                "left": "0",
                "bottom": "0",
                "width": "100%",
                "color": "white",
                "textAlign": "center"}}>
    <span className="text-sm  sm:text-center text-white-400">© 2023 <a href="https://flowbite.com/"
                                                                                        className="hover:underline">PetAdo</a>. All Rights Reserved.
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

            {/*<footer className="bg-gray-100 text-center">*/}
            {/*    <div className="px-6 pt-6">*/}
            {/*        <form action="">*/}
            {/*            <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">*/}
            {/*                <div className="md:ml-auto md:mb-6">*/}
            {/*                    <p className="text-gray-800">*/}
            {/*                        <strong>Sign up for our newsletter</strong>*/}
            {/*                    </p>*/}
            {/*                </div>*/}

            {/*                <div className="md:mb-6">*/}
            {/*                    <input*/}
            {/*                        type="text"*/}
            {/*                        className="*/}
            {/*  form-control*/}
            {/*  block*/}
            {/*  w-full*/}
            {/*  px-3*/}
            {/*  py-1.5*/}
            {/*  text-base*/}
            {/*  font-normal*/}
            {/*  text-gray-700*/}
            {/*  bg-white bg-clip-padding*/}
            {/*  border border-solid border-gray-300*/}
            {/*  rounded*/}
            {/*  transition*/}
            {/*  ease-in-out*/}
            {/*  m-0*/}
            {/*  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none*/}
            {/*"*/}
            {/*                        id="exampleFormControlInput1"*/}
            {/*                        placeholder="Email address"/>*/}
            {/*                </div>*/}

            {/*                <div className="md:mr-auto mb-6">*/}
            {/*                    <button type="button"*/}
            {/*                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}

            {/*    <div className="text-center text-gray-700 p-4" style="background-color: rgba(0, 0, 0, 0.2);">*/}
            {/*        © 2021 Copyright:*/}
            {/*        <a className="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </>

    )
}