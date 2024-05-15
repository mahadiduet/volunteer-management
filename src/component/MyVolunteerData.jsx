import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MyVolunteerData = ({ post, onDelete }) => {
    const { _id, category, location, postTitle } = post;
    const MySwal = withReactContent(Swal);
    const handlePostDelete = (e) => {
        e.preventDefault();

        MySwal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be delete this post!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-management-server-website.vercel.app/myvolunteerpost/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then((data) => {
                        onDelete(_id);
                    })
                MySwal.fire(
                    'Deleted!',
                    'Your Post has been deleted.',
                    'success'
                );
            }
        });


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