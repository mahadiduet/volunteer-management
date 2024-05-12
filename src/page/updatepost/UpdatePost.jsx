import axios from "axios";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import DynamicTitle from "../../component/sharecomponet/DynamicTitle";
import { toast } from "react-toastify";

const UpdatePost = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { _id, category, deadline, description, location, noOfVolunteersNeeded, postTitle, thumbnail, displayName, email } = data[0];
    const [date, setDate] = useState(deadline);
    const [categoryValue, setCategoryValue] = useState(category);

    const handleUpdatePost = async(e) =>{
        e.preventDefault();
        const from = e.target;
        const thumbnail = from.thumbnail.value;
        const postTitle = from.postTitle.value;
        const description = from.description.value;
        const category = from.category.value;
        const location = from.location.value;
        const noOfVolunteersNeeded = parseInt(from.noOfVolunteersNeeded.value);
        const deadline = from.deadline.value;
        const updateData = {thumbnail, postTitle, description, category, location, noOfVolunteersNeeded, deadline, email, displayName}
        console.log(updateData);
        axios.put(`http://localhost:5000/update-post/${_id}`, updateData)
        .then(res =>{
            // console.log(res.data);
            toast.success("Your post is updated!!!");
            navigate('/myvolunteerpost');
        })
        .catch((err)=>{
            console.log(err);
        })
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-dew-gradient">
            <DynamicTitle title="Post Update" />
            <div className="bg-white p-8 rounded-xl shadow-lg w-3/4">
                <h2 className="text-2xl font-bold text-center mb-8">Update Volunteer Post</h2>

                <form onSubmit={handleUpdatePost}>
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
                            defaultValue={thumbnail}
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
                            defaultValue={postTitle}
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
                            defaultValue={description}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold" htmlFor="email">
                            Category
                        </label>
                        <select 
                        name="category" 
                        value={categoryValue}
                        onChange={(e)=>setCategoryValue(e.target.value)}
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
                            defaultValue={location}
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
                            defaultValue={noOfVolunteersNeeded}
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
                        Update Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePost;