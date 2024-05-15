import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MyRequestData = ({ post, onDelete }) => {
    const { _id, category, postTitle, deadline } = post;
    const MySwal = withReactContent(Swal);
    const handleRequestPostDelete = e => {
        e.preventDefault();
        MySwal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be cancel volunteer request!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, Cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-management-server-website.vercel.app/my-request-volunteer-post-cancel/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        onDelete(_id);
                    })
                MySwal.fire(
                    'Cancel!',
                    'Your Request has been cancel.',
                    'success'
                );
            }
        });

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