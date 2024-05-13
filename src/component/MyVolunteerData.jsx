import { Link } from "react-router-dom";

const MyVolunteerData = ({ post, onDelete }) => {
    const { _id, category, location, postTitle } = post;
    const handlePostDelete = (e) =>{
        e.preventDefault();
        
        fetch(`https://volunteer-management-server-website.vercel.app/myvolunteerpost/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then((data)=>{
            onDelete(_id);
        })
    }
    return (
        <tr className="">
            <td className="border border-gray-500">{postTitle}</td>
            <td className="border border-gray-500">{category}</td>
            <td className="border border-gray-500">{location}</td>
            <td className="flex gap-5 border border-gray-500">
                <Link to={`/updatepost/${_id}`}><button className="bg-cyan-300 p-2 rounded-lg">Update</button></Link>

                <button className="bg-red-600 p-2 rounded-lg" onClick={handlePostDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default MyVolunteerData;