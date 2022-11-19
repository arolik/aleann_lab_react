import { JobI } from "../assets/interfaces";
import { SlLocationPin } from 'react-icons/sl';
import { AiFillStar } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import './../App.css';
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import {  setId } from "../store/jobsReducer";

interface ItemI {
    item: JobI
}

const Job:React.FC<ItemI> = ({item}) => {

    const dispatch = useAppDispatch();
    const postedJob = item.createdAt && new Date(item.createdAt);
    const createdYear = postedJob && postedJob.getFullYear();
    const createdMonth = postedJob && postedJob.getMonth() + 1;
    const createdDay = postedJob && postedJob.getDate();
    
    function showDetails () {
        dispatch(setId(item.id));
    }

    return (
        <div key={item.id} className="job__container mb-[8px] px-[16px] py-[24px] flex flex-row gap-x-6">
        <div className="mt-7 sm:mt-7 lg:mt-0">
            <div className="job__img-container  w-[66px] h-[66px] lg:w-[85px] lg:h-[85px] ">
                <img src={item.pictures[0]} className="job__img rounded-full grow"  alt="text"  />
            </div>
        </div>
        <div className="job__content flex flex-col-reverse sm:flex-col-reverse lg:flex-row grow justify-between">
            <div className="job__description">
                <p className="job__title font-bold mb-[8px]"><Link to="/aleann_lab_react/details" onClick={showDetails}>{item.title}</Link></p>
                <p className="job__address mb-[8px]">{item.address}</p>
                <div className="job__location flex flex-row items-center gap-x-2">
                    <div><SlLocationPin /></div>
                    <p> Viena, Austria</p>
                </div>
            </div>
            <div className="job__rate flex flex-row justify-between">
                <div className="job__stars flex items-center">
                    <div className="flex flex-row"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                </div>
                <div className="flex justify-between flex-col">
                    <div className="flex self-end hidden sm:hidden lg:flex">
                        <BsBookmark />
                    </div>
                    <div className="job__created">
                    <p>posted {createdYear}.{createdMonth}.{createdDay} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Job;