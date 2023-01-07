import React from "react";
import {Text,Avatar,Image} from "react-ui";

export default function ImagePart() {
    return(
        <>
            <div id="main" className="mt-20 p-2 justify-around h-2000 m-auto w-10/12 flex
                              items-start
                              border-green-900 ">
                <div >
                    <img
                        className="rounded-full"
                    alt="sky full of stars"
                    css={{ width: '30px' }}
                    src="https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
                    />
                </div>
                <div className="bg-lime-100-700 rounded-lg py-8 w-100 m-10 ">
                    <Text style={{fontWeight: 'bold',fontFamily: 'Myriad Pro Regular',fontSize : '30px'}}>
                        <Text style={{color: 'black'}}>
                            <p>If u want to help a animal , then adopt and give it a home</p>
                        </Text>
                    </Text>

                </div>
                <div >
                    <img
                        className="rounded-full"
                    alt="sky full of stars"
                    css={{ width: '30px', }}
                    src="https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
                    />
                </div>

            </div>
        </>
    )
}