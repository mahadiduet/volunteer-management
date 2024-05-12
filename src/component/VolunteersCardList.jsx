import { Link } from "react-router-dom";

const VolunteersCardList = ({volunteer}) => {
    // console.log(volunteer);
    const {_id, category, postTitle, thumbnail, deadline} = volunteer;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={thumbnail} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {postTitle}
            </td>
            <td>{category}</td>
            <th>
                {deadline}
            </th>
            <td>
                <Link to={`/volunteerPostDetails/${_id}`}> <button className="btn bg-blue-700 text-white">View Details</button> </Link>
            </td>
        </tr>
    );
};

export default VolunteersCardList;