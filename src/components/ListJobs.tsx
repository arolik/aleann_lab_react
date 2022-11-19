
import { JobI } from "../assets/interfaces";
import './../App.css';
import Job from "./Job";

interface ListJobsI {
    list: Array<JobI>
}

const ListJobs: React.FC<ListJobsI> = ({ list }) => {

    return (
        <div className="app__wrapper">
            <div className="app__inner">
                {list.map((item) => {
                    return (
                        <Job key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default ListJobs;