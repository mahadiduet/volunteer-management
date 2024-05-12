import axios from "axios";
import { useEffect, useState } from "react";
import VolunteersCard from "../../component/VolunteersCard";

const VolunteersPost = () => {

    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/volunteersPost');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        // return () => {
        // };
    }, []);

    return (
        <div>
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">All Volunteers Post</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-4">
                {
                    data.map(volunteer => <VolunteersCard key={volunteer._id} volunteer={volunteer}></VolunteersCard>)
                }
            </div>
        </div>
    );
};

export default VolunteersPost;