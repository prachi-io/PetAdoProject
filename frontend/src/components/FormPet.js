import React, {useState,useEffect} from "react";
import axios from "axios";
import NavAll from "./NavAll";
import Footer from "./Footer";
export default function FormPet() {
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [breed, setBreed] = useState('');
    const [category,setCategory] = useState('')
    const [imageLabel, setImageLabel] = useState('');
    const [owner, setOwner] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');

    // Fetch categories when the component mounts
    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get("http://localhost:4000/api/category/all");
                // console.log("response : " ,response)
                // console.log("response.data : "  , response.data)
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchCategories();
    }, []);

    const submitData = async () => {
        console.log(category)
        const cat = await axios.get("http://localhost:4000/api/category/getid/" + category )
        console.log(cat)

        const data = {
            name,
            age,
            color,
            description,
            breed,
            category:cat.data.ans,
            imageLabel,
            owner,
            ownerEmail,
        }
        console.log(data)
        console.log(images)
        setName("")
        setAge(0)
        setColor("")
        setDescription("")
        setBreed("")
        setCategory("")
        setImageLabel("")
        setOwner("")
        setOwnerEmail("")
        setImages([])
        const res = await axios.post("http://localhost:4000/api/pets/create" , data)

    }



    return(
        <>
            <NavAll/>
            {/*tyle={{'backgroundColor' : 'pink'}}*/}
            <div className="bg-[#B8E3FF] pt-5 pb-2">
                <div className="h-full w-full max-w-xs m-auto bg-[#FFCBA5] " >
                    <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitData}>
                        <h2 className="flex align-middle align-center justify-center" style={{'fontWeight' : 'bold' , 'fontSize' : '25px'}} >FORM PET</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="name" value={name} onChange={(event)=> setName(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Age
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="age" type="number" placeholder="age" value={age} onChange={(event)=> setAge(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Color
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="color" type="text" placeholder="Color" value={color} onChange={(event)=> setColor(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Description
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description" type="text" placeholder="Description" value={description} onChange={(event)=> setDescription(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Breed
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="breed" type="text" placeholder="Breed" value={breed} onChange={(event)=> setBreed(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Image Label
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="imageLabel" type="text" placeholder="Image Label" value={imageLabel} onChange={(event)=> setImageLabel(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Category
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                            >
                                <option value="">Select a Category</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Owner
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="owner" type="text" placeholder="Owner" value={owner} onChange={(event)=> setOwner(event.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Owner Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="ownerEmail" type="text" placeholder="Owner Email" value={ownerEmail} onChange={(event)=> setOwnerEmail(event.target.value)}/>
                        </div>
                        {/*<div className="mb-4">*/}
                        {/*    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">*/}
                        {/*        Image*/}
                        {/*    </label>*/}
                        {/*    <input type="file" multiple accept="image/*" onChange={(event) => setImages(event.target.files)} />*/}
                        {/*</div>*/}

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button" onClick={submitData}>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/*<Footer/>*/}

            <footer
                className="mb-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#03254C]" style={{
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

        </>

    )
}