import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import axios from "axios";
import MyVolunteerData from "../../component/MyVolunteerData";
import DynamicTitle from "../../component/sharecomponet/DynamicTitle";

const MyVolunteerPost = () => {
    const [myVolunteerPost, setMyVolunteerPost] = useState([]);
    console.log(myVolunteerPost);
    const {user, loading} = useContext(AuthContext);
    const email = user?.email;
    console.log(email);
    useEffect(()=>{
        const fetachData = async()=>{
            await axios(`http://localhost:5000/myvolunteerpost?email=${email}`)
            .then((data)=>{
                setMyVolunteerPost(data.data);
            })
            .then((err)=>{
                console.log(err);
            })
        }
        fetachData();
    },[email]);
    return (
        <div className="bg-cyan-100">
            <DynamicTitle title="My Volunteer Post" />
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center pt-8 mb-8">My Volunteer Post</h1>
                    {/* { loading? 'Loading......':''} */}
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-center border border-gray-500">Tourism Spot Name</th>
                                <th className="text-center border border-gray-500">Country Name</th>
                                <th className="text-center border border-gray-500">Location</th>
                                <th className="text-center border border-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { loading? 'Loading......':''}
                            {
                                myVolunteerPost.map(post=><MyVolunteerData key={post._id} post={post}></MyVolunteerData>)
                                
                            }

                        </tbody>
                    </table>
            
        </div>
    );
};

export default MyVolunteerPost;