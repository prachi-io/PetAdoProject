import React, {useState} from "react";
export default function FormPet() {

    const [images, setImages] = useState([]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [breed, setBreed] = useState('');
    const [imageLabel, setImageLabel] = useState('');
    const [category, setCategory] = useState('');
    const [owner, setOwner] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');

    const submitData = () => {
        const data = {
            name,
            age,
            color,
            description,
            breed,
            imageLabel,
            category,
            owner,
            ownerEmail,
            images
        }
        console.log(data)
        setName("")
        setAge(0)
        setColor("")
        setDescription("")
        setBreed("")
        setImageLabel("")
        setCategory("")
        setOwner("")
        setOwnerEmail("")
        setImages([])
    }



    return(
        <div className="w-full max-w-xs m-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitData}>
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Category
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category" type="text" placeholder="category" value={category} onChange={(event)=> setCategory(event.target.value)}/>
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Image
                    </label>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" onClick={submitData}>
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}