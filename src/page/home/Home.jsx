import { Link, useLoaderData } from "react-router-dom";
import Slider from "./slider/Slider";
import VolunteersCard from "../../component/VolunteersCard";

const Home = () => {
    const volunteers = useLoaderData();
    console.log(volunteers);
    return (
        <div>
            <Slider />
            <div>
                <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">Volunteers Post</h1>
                <p className="w-3/4 mx-auto text-center mb-5">
                    Volunteer service embodies selflessness, community spirit, and empathy. It spans various sectors, from humanitarian aid to environmental conservation, education, and healthcare. Volunteers contribute their time, skills, and resources to address societal needs, fostering positive change and building stronger, more cohesive communities.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-4">
                {
                    volunteers.map(volunteer => <VolunteersCard key={volunteer._id} volunteer={volunteer}></VolunteersCard>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/volunteersPost`}><button className="btn bg-blue-700 text-white text-xl">See All</button></Link>
            </div>
        </div>
    );
};

export default Home;