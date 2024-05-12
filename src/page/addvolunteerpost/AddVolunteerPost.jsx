import { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const AddVolunteerPost = () => {
    const { user } = useContext(AuthContext);
    const [date, setDate] = useState(new Date());

    const email = user?.email ? user.email : '';
    const displayName = user?.displayName ? user.displayName : '';

    const handleAddVolunteersPost = async(e) =>{
        e.preventDefault();
        const from = e.target;
        const thumbnail = from.thumbnail.value;
        const postTitle = from.postTitle.value;
        const description = from.description.value;
        const category = from.category.value;
        const location = from.location.value;
        const noOfVolunteersNeeded = from.noOfVolunteersNeeded.value;
        const deadline = from.deadline.value;
        const data = {thumbnail, postTitle, description, category, location, noOfVolunteersNeeded, deadline, email, displayName}
        console.log(data);
        await axios.post('http://localhost:5000/addVolunteersPost', data)
        .then(res =>{
            console.log('Response API: ',res.data)
        })
        .catch((err)=>{
            console.log(err);
        })

        console.log(data);
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-dew-gradient">
            <div className="bg-white p-8 rounded-xl shadow-lg w-3/4">
                <h2 className="text-2xl font-bold text-center mb-8">Add Volunteer Post</h2>

                <form onSubmit={handleAddVolunteersPost}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Thumbnail
                        </label>
                        <input
                            type="text"
                            id="thumbnail"
                            name="thumbnail"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Thumbnail"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Post Title
                        </label>
                        <input
                            type="text"
                            name="postTitle"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Post Title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Description
                        </label>
                        <input
                            type="text"
                            name="description"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Description"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Category
                        </label>
                        <select 
                        name="category" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="social service">Social Service</option>
                            <option value="animal welfare">Animal Welfare</option>
                            <option value="others">Others</option>
                        </select>
                        
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Location"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            No. of volunteers needed
                        </label>
                        <input
                            type="text"
                            name="noOfVolunteersNeeded"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="No. of volunteers needed"
                        />
                    </div>
                    <div className="mb-4 flex gap-28 items-center">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Deadline
                        </label>
                        <ReactDatePicker
                            name="deadline"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            showIcon
                            selected={date}
                            onChange={(date) => setDate(date)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Organizer name
                        </label>
                        <input
                            type="text"
                            defaultValue={displayName}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder={displayName}
                            disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Organizer Email
                        </label>
                        <input
                            type="text"
                            defaultValue={email}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder={email}
                            disabled
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Add Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteerPost;