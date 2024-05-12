import { Link } from "react-router-dom";

const VolunteersCard = ({volunteer}) => {
    console.log(volunteer);
    const {_id, thumbnail, category, deadline, postTitle} = volunteer;
    return (
        <div className="bg-base-200, min-h-[450px] p-4 rounded-lg shadow-2xl relative">
            <div className="flex-col lg:flex-row">
                <img className="w-[300px] h-[200px] mx-auto mb-6 rounded-md" src={thumbnail} />
                <div>
                    <h1 className="text-3xl font-bold">{postTitle}</h1>
                    <div className="text">
                        <p className="my-2">Category: {category}</p>
                        <p className="my-2">Deadline: {deadline}</p>
                        {/* <p className="my-2">Average Cost: {average_cost}/{travel_time} days</p> */}
                    </div>
                    <Link to={`/volunteerPostDetails/${_id}`}><button className="btn bg-blue-700 text-white w-full right-0 text-xl bottom-0 absolute">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default VolunteersCard;