import React from "react";
import {Text,Avatar,Image} from "react-ui";

export default function ImagePart() {
    return(
        <div className=" pt-5 pb-16 mt-0 mb-0 bg-[#B8E3FF]">
            <div id="main" className="mt-20 p-2 justify-around h-2000 m-auto w-10/12 flex
                              items-start
                              border-green-900">
                <div >
                    <img className="rounded-[30px]" style={{ width: 950, height: 400 }} src="https://i.ytimg.com/vi/TUs-_KNr8qI/maxresdefault.jpg" alt="React Logo" />
                </div>
                <div className="bg-lime-100-700 rounded-lg py-8 w-100 m-10 ">
                    <Text style={{fontWeight: 'bold',fontFamily: 'Cursive',fontSize : '30px'}}>
                        <Text style={{color: 'black' , letterSpacing : "0.02rem"}}>
                            <p className="content-center">Find your fur-ever friend today. Unleash love and adopt a pet.</p>
                        </Text>
                    </Text>

                </div>
                <div >
                    <img className="rounded-[30px]" style={{ width: 900, height: 400 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnK7vPgm9LzMsQaT3BQM7epPfLOToEjD6OsfIs4PhQ4U-F40uAWHk1-lgO83JrIK9m-o&usqp=CAU" alt="React Logo" />
                </div>

            </div>
        </div>
    )
}