import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyRequestData from "../../component/MyRequestData";
import DynamicTitle from "../../component/sharecomponet/DynamicTitle";

const MyVolunteerRequestPost = () => {
    const [myRequestPost, setMyRequestPost] = useState([]);
    const { user, logOut, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const user_email = user?.email;
    console.log(user_email);

    useEffect(() => {
        const fetachData = async () => {
            await axios(`http://localhost:5000/my-request-volunteer-post?email=${user_email}`, {
                withCredentials: true
            })
                .then((data) => {
                    // console.log(data);
                    setMyRequestPost(data.data);
                    console.log(data.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        fetachData();
    }, [user_email, logOut, navigate]);

    const handleDeletePost = (postId) => {
        setMyRequestPost(prevPosts => prevPosts.filter(post => post._id !== postId));
    };

    const table = <>
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center border border-gray-500">Post Title</th>
                    <th className="text-center border border-gray-500">Category</th>
                    <th className="text-center border border-gray-500">Deadline</th>
                    <th className="text-center border border-gray-500">Action</th>
                </tr>
            </thead>
            <tbody>
                {loading ? 'Loading......' : ''}
                {
                    myRequestPost.map(post => <MyRequestData key={post._id} post={post} onDelete={handleDeletePost}></MyRequestData>)

                }

            </tbody>
        </table>
    </>

    const noData = <>
        <div>
            <img src="https://i.ibb.co/TKw5VXd/No-data.webp" alt="" />
            <h1 className="text-5xl text-center mb-8 text-cyan-800">My volunteer request data is empty!</h1>
        </div>
    </>

    return (
        <div>
            <DynamicTitle title="My Volunteer Request" />
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center pt-8 mb-8">My Volunteer Request</h1>
            {myRequestPost.length>0?table:noData}
            
        </div>
    );
};

export default MyVolunteerRequestPost;