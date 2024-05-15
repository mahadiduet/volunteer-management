import { Link, useLoaderData } from "react-router-dom";
import Slider from "./slider/Slider";
import VolunteersCard from "../../component/VolunteersCard";
import ExtraSection from "./ExtraSection";

const Home = () => {
    const volunteers = useLoaderData();
    console.log(volunteers);
    return (
        <div>
            <Slider />
            <div className="bg-slate-200">
                <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center pt-8 pb-8">Volunteers Post</h1>
                <p className="w-3/4 mx-auto text-center pb-5">
                    Volunteer service embodies selflessness, community spirit, and empathy. It spans various sectors, from humanitarian aid to environmental conservation, education, and healthcare. Volunteers contribute their time, skills, and resources to address societal needs, fostering positive change and building stronger, more cohesive communities.
                </p>
            </div>
            <div className="bg-slate-200 grid lg:grid-cols-3 md:grid-cols-2 gap-5 pb-4">
                {
                    volunteers.map(volunteer => <VolunteersCard key={volunteer._id} volunteer={volunteer}></VolunteersCard>)
                }
            </div>
            <div className="bg-slate-200 pb-4 flex justify-center">
                <Link to={`/volunteersPost`}><button className="btn bg-blue-700 text-white text-xl">See All</button></Link>
            </div>
            <ExtraSection />
        </div>
    );
};

export default Home;