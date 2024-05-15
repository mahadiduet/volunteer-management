import { Link, useLoaderData } from "react-router-dom";
import DynamicTitle from "../../component/sharecomponet/DynamicTitle";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import axios from "axios";
import { toast } from "react-toastify";

const VolunteerDetails = () => {
    const volunteer = useLoaderData();
    const { user } = useContext(AuthContext);
    const user_email = user?.email;
    const user_name = user?.displayName;
    const { _id, category, deadline, description, location, noOfVolunteersNeeded, postTitle, thumbnail, email, displayName } = volunteer[0];
    const updateNoOfVolunteer = noOfVolunteersNeeded - 1;

    const handleBeVolunteer = async () => {
        if (noOfVolunteersNeeded > 0) {
            const data = {
                post_id: _id,
                postTitle,
                organization_name: displayName,
                organization_email: email,
                category,
                deadline,
                user_name: user_name,
                user_email: user_email
            };
            await axios.post('https://volunteer-management-server-website.vercel.app/be-volunteer', data)
                .then(res => {
                    console.log('Response API: ', res.data)
                    console.log('Response Insert Id: ', res.data.insertedId);
                    if (res.data.insertedId) {
                        axios.put(`https://volunteer-management-server-website.vercel.app/be-volunteer/${_id}`, { updateNoOfVolunteer })
                            .then(res => {
                                toast.success("You are added to Vounteer team!");
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            toast.warning('Sorry, Already volunteer team full. Your request is no accept.');
        }

    }
    return (
        <div className="bg-blue-100 p-4 rounded-lg">
            <DynamicTitle title={postTitle} />
            <div className="flex-col lg:flex-row">
                <img className="w-full h-[300px] mx-auto mb-6 rounded-md" src={thumbnail} />
                <div>
                    <h1 className="text-3xl font-bold">{postTitle}</h1>
                    <div className="text flex gap-6">
                        <p className="my-2">Category: {category}</p>
                        <p className="my-2">Location: {location}</p>
                        <p className="my-2">Deadline: {deadline}</p>
                    </div>
                    <div className="mb-4">
                        <p>Description: {description}</p>
                    </div>
                    <div className="flex gap-10">
                        <p>Need Total Volunteers:{noOfVolunteersNeeded}</p>
                    </div>

                    <div className="flex justify-center">
                        <button className="btn btn-primary text-xl" onClick={() => document.getElementById('modal').showModal()}>Be a Volunteer</button>
                    </div>
                </div>
            </div>
            {/* Modal Code */}
            <dialog id="modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="modal-action">
                        <div>
                            <img className="w-[200px] h-[200px] mx-auto mb-6 rounded-md" src={thumbnail} />
                            <h1 className="text-3xl font-bold">{postTitle}</h1>
                            <div className="mb-4">
                                <p>Description: {description}</p>
                            </div>
                            <div className="text flex gap-6">
                                <p className="my-2">Category: {category}</p>
                                <p className="my-2">Location: {location}</p>
                                <p>Need Total Volunteers:{noOfVolunteersNeeded}</p>
                            </div>
                            <div className="flex gap-4">
                                <p>Organization Name: {displayName}</p>
                                <p>Organization Email: {email}</p>
                            </div>
                            <div className="flex gap-4">
                                <p>User Name: {user_name}</p>
                                <p>User Email: {user_email}</p>
                            </div>
                            <div className="flex gap-10">
                                <p className="my-2">Deadline: {deadline}</p>
                            </div>
                            <form method="dialog">
                                <div className="flex justify-around">
                                    <button onClick={handleBeVolunteer} className="btn btn-primary text-xl self-end">Request</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default VolunteerDetails;