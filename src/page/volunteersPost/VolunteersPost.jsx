import axios from "axios";
import { useEffect, useState } from "react";
import VolunteersCard from "../../component/VolunteersCard";
import DynamicTitle from "../../component/sharecomponet/DynamicTitle";
import VolunteersCardList from "../../component/VolunteersCardList";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

const VolunteersPost = () => {

    const [data, setData] = useState([]);
    const [grid, setGrid] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    // const [searchContent, setSearchContent] = useState('');
    // console.log(data);
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

    useEffect(() => {
        const filteredResults = data.filter(item =>
            item.postTitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredResults);
    }, [searchQuery, data]);

    const handleGridView = e => {
        e.preventDefault();
        setGrid(true);
    }

    const handleListView = e => {
        e.preventDefault();
        setGrid(false);
    }

    const handleSearchInputChange = e => {
        setSearchQuery(e.target.value);
        console.log(searchQuery);
    }

    const gridView = <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-4" id="grid">
            {
                filteredData.map(volunteer => <VolunteersCard key={volunteer._id} volunteer={volunteer}></VolunteersCard>)
            }
        </div>
    </>
    const listView = <>
        <div>
            <div className="overflow-x-auto" id="list">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Thumnail</th>
                            <th>Post Title</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map(volunteer => <VolunteersCardList key={volunteer._id} volunteer={volunteer}></VolunteersCardList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>

    return (
        <div>
            <DynamicTitle title="Volunteers Post" />
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">All Volunteers Post</h1>
            <div className="flex gap-4 justify-end">
                <button id="grid" onClick={handleGridView}><BsFillGrid3X3GapFill /></button>
                <button id="list" onClick={handleListView}><FaThList /></button>

            </div>
            <div className="mt-4 w-[200px]">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" onChange={handleSearchInputChange} className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            {grid ? gridView : listView}
            {/* {gridView} */}
            {/* {listView} */}

        </div>
    );
};

export default VolunteersPost;