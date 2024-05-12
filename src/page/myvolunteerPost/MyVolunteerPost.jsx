import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import axios from "axios";
import MyVolunteerData from "../../component/MyVolunteerData";
import DynamicTitle from "../../component/sharecomponet/DynamicTitle";
import { useNavigate } from "react-router-dom";

const MyVolunteerPost = () => {
    const { logOut } = useContext(AuthContext);
    const [myVolunteerPost, setMyVolunteerPost] = useState([]);
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const email = user?.email;
    // console.log(email);
    useEffect(() => {
        const fetachData = async () => {
            await axios(`http://localhost:5000/myvolunteerpost?email=${email}`, {
                withCredentials: true
            })
                .then((data) => {
                    // console.log(data);
                    setMyVolunteerPost(data.data);
                })
                .catch((error) => {
                    // console.log('Error ocurs');
                    // console.log(error.response.status);
                    if (error.response.status === 401 || error.response.status === 403) {
                        logOut()
                            .then(() => {
                                navigate('/login')
                            })
                            .catch(error => console.log(error))
                    }
                })
        }
        fetachData();
    }, [email]);
    return (
        <div className="bg-cyan-100">
            <DynamicTitle title="My Volunteer Post" />
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center pt-8 mb-8">My Volunteer Post</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center border border-gray-500">Tourism Spot Name</th>
                        <th className="text-center border border-gray-500">Country Name</th>
                        <th className="text-center border border-gray-500">Location</th>
                        <th className="text-center border border-gray-500">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? 'Loading......' : ''}
                    {
                        myVolunteerPost.map(post => <MyVolunteerData key={post._id} post={post}></MyVolunteerData>)

                    }

                </tbody>
            </table>

        </div>
    );
};

export default MyVolunteerPost;