import { Link } from "react-router-dom";


const MyRequestData = ({ post, onDelete }) => {
    const {_id, category, postTitle, deadline } = post;
    const handleRequestPostDelete = e =>{
        e.preventDefault();
        fetch(`https://volunteer-management-server-website.vercel.app/my-request-volunteer-post-cancel/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            onDelete(_id);
        })
    }
    return (
        <tr className="">
            <td className="border border-gray-500">{postTitle}</td>
            <td className="border border-gray-500">{category}</td>
            <td className="border border-gray-500">{deadline}</td>
            <td className="flex gap-5 border border-gray-500">
            <button className="bg-red-600 text-white p-2 rounded-lg text-center mx-auto" onClick={handleRequestPostDelete}>Cancel</button>
            </td>
        </tr>
    );
};

export default MyRequestData;