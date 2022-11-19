import { useAppSelector } from "../store/hooks";
import { BsBookmark, BsFillShareFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { SlLocationPin } from 'react-icons/sl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import map from './../img/Map.png';

const JobDetails:React.FC = () => {

    const JobId = useAppSelector( state => state.jobs.jobId);
    const jobs = useAppSelector(state => state.jobs.jobs);
    const item = jobs.find(elem => elem.id === JobId);
    const postedJob = item?.createdAt && new Date(item.createdAt);
    const createdYear = postedJob && postedJob.getFullYear();
    const createdMonth = postedJob && postedJob.getMonth() + 1;
    const createdDay = postedJob && postedJob.getDate();
    console.log(item);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="job__details-wrapper mt-[56px]">
            <div className="job__details-inner flex flex-col lg:flex-row ">
                <div className="job__details-info w-full lg:w-8/12 pl-[19px] pr-[19px]">
                    <div className="details__header flex flex-row  lg:justify-between items-center flex-col lg:flex-row">
                        <div className="details__header-title flex self-start pb-[9px]">
                            <h1>Job Details</h1>
                        </div>
                        <div className="details__header-links flex flex flex-row self-start gap-x-6">
                            <div className="flex flex-row items-center">{<BsBookmark />} <p className="ml-4">Save to my list</p></div>
                            <div className="flex flex-row items-center">{<BsFillShareFill />} <p className="ml-4">Share</p></div>
                        </div>
                    </div>
                    <div className="details__content mt-[39px] ">
                        <div className="mb-[32px]">
                            <button className="details__content-btn px-[30px] py-[18px]">APPLY NOW</button>
                        </div>
                        <div className="details__content-description">
                            <div className="content__description-title flex flex-row justify-between flex-wrap">
                                <div className="font-bold text-2xl w-100  lg:w-2/3 mb-[7px] ">{item?.title}</div>
                                <div className="w-1/3 text-right sm:order-last lg:order-none">
                                    <p className="font-bold text-xl">€ {item?.salary}</p>
                                    <p className="text-lg">brutto, per year</p>
                                </div>
                                <div>
                                    <p className="text-lg ">posted {createdYear}.{createdMonth}.{createdDay}</p>
                                </div>
                            </div>
                            <p className="mt-[7px] text-lg">{item?.description}</p>
                            <div className="content__description-response mt-[45px]">
                                <h1 className="font-bold text-lg mb-[20px]">Responsopilities</h1>
                                <p className="text-lg font-normal mb-[33px]">Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
                                </p>
                                <p className="text-lg font-normal mb-[33px]">The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
                                </p>
                                <p className="text-lg font-normal">
                                Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
                                </p>
                            </div>
                            <div className="content__description-benefits mt-[45px]">
                                <h1 className="font-bold text-lg mb-[20px]">Compensation & Benefits:</h1>
                                <p className="text-lg">Our physicians enjoy a wide range of benefits, including:</p>
                                <ul className="text-lg">
                                    {item?.benefits?.map((b) => {
                                        return (
                                            <li>{b}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <button className="details__content-btn px-[30px] py-[18px]">APPLY NOW</button>
                        </div>
                    </div>
                    <div className="details__footer mb-[90px]">
                        <div className="details__footer-info mt-[86px] mb-[86px]">
                            <div className="footer__info-title pb-[9px] mb-[15px]">
                                <h1>Additional info</h1>
                            </div>
                            <div className="footer__info-types flex flex-col">
                                <div>
                                    <p className="info__types-title mb-[10px]">Employment type</p>
                                </div>
                                <div className="flex flex-row gap-2 ">
                                    <button className="info__types-btn font-bold pt-[17px] pb-[16px] w-1/3">Full time</button>
                                    <button className="info__types-btn font-bold pt-[17px] pb-[16px] w-1/3">Part time</button>
                                    <button className="info__types-btn font-bold pt-[17px] pb-[16px] w-1/3">Temporary</button>
                                </div>
                            </div>
                            <div className="footer__info-benefits flex flex-col mt-[23px]">
                                <div>
                                    <p className="info__benefits-title mb-[10px]">Benefits</p>
                                </div>
                                <div className="flex flex-row gap-2 ">
                                    <button className="info__benefits-btn font-bold pt-[17px] pb-[16px] w-1/3">Full time</button>
                                    <button className="info__benefits-btn font-bold pt-[17px] pb-[16px] w-1/3">Part time</button>
                                </div>
                            </div>
                        </div>
                        <div className="details__footer-images">
                            <div className="footer__images-title pb-[9px] mb-[15px]">
                                <h1>Attached images</h1>
                            </div>
                            <div className="footer__images-slider">
                                <Slider {...settings}>
                                    {item?.pictures.map((img: any) => {
                                        return (
                                            <div className="slide__wrapper">
                                                <img src={img} alt="#" />
                                            </div>
                                        )
                                    })}
                                </Slider>     
                            </div>
                        </div>
                    </div>
                </div>
                <section className="job__details-address w-full lg:w-4/12 ">
                    <div className="top__adress px-[62px] pt-[31px] pb-[20px]">
                        <p className="adress__title font-bold mb-[8px]">{item?.title}</p>
                        <div className="flex flex-row items-center mb-[8px]">
                            <SlLocationPin /> <p className="adress__top font-normal">{item?.address}</p>
                        </div>
                        <p className="adress__phone font-normal">{item?.phone}</p>
                        <p className="adress__email font-normal">{item?.email}</p>
                    </div>
                    <div className="bottom__adress">
                        <img src={map}  alt="map"  />
                    </div>
                </section>
                <div className="return__btn py-[18px] px-[23px] hidden xl:flex flex-row ">
                <IoIosArrowBack /><Link to="/" className="font-semibold text-xs" > return to job board</Link>
                </div>
            </div>
        </div>
    )
}

export default JobDetails;
