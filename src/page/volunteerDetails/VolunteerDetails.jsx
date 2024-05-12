import { Link, useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
    const volunteer = useLoaderData();
    console.log('Details Volunteer: ', volunteer);
    const { _id, category, deadline, description, location, noOfVolunteersNeeded, postTitle, thumbnail } = volunteer[0];
    return (
        <div className="bg-base-200 p-4 rounded-lg">
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
                    <Link to={`/bevolunteer/${_id}`}><button className="btn btn-primary w-full text-xl self-end">Be a Volunteer</button></Link>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;