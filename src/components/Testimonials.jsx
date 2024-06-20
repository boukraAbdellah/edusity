import Title from "./Title"
import next_icon from "../assets/next-icon.png"
import { useRef } from "react";
import user_1 from "../assets/user-1.png"
import user_2 from "../assets/user-2.png"
import user_3 from "../assets/user-3.png"
import user_4 from "../assets/user-4.png"


const Testimonials = () => {

  const slider = useRef();

  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25
    } 
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    } 
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className=" container ">
      <Title title={"what Students say"} subtitle={"testimonials"} />
      <div className=" flex items-center w-full justify-between px-[40px] my-[80px] mx-auto  ">
        <div
          className=" bg-primary w-14 h-14   flex items-center flex-shrink-0 justify-center rounded-full cursor-pointer"
          onClick={slideBackward}
        >
          <img src={next_icon} alt="icon " className="w-5 h-5 -scale-x-100" />
        </div>
        <div
          className=" bg-primary w-14 h-14  flex items-center flex-shrink-0 order-2 justify-center rounded-full cursor-pointer"
          onClick={slideForward}
        >
          <img src={next_icon} alt="icon " className="w-5 h-5 " />
        </div>
        <div className=" slider overflow-x-hidden overflow-y-visible">
          <ul
            ref={slider}
            className=" flex  w-[200%] py-10 transition-transform duration-500"
          >
            <li className=" shadow-xl mx-7 p-10 flex-col flex items-start rounded-lg ">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={user_1}
                  alt="user 1"
                  className=" h-[72px] w-[72px]  rounded-full border-[4px] border-primary"
                />
                <div className="flex flex-col ">
                  <p className=" text-xl font-bold text-primary ">
                    Emily Williams
                  </p>
                  <span className=" text-gray-500">Edusity, USA</span>
                </div>
              </div>
              <p className=" text-gray-600">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </li>
            <li className=" shadow-xl mx-7 p-10 flex-col flex items-start rounded-lg ">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={user_2}
                  alt="user 2"
                  className=" h-[72px] w-[72px]  rounded-full border-[4px] border-primary"
                />
                <div className="flex flex-col ">
                  <p className=" text-xl font-bold text-primary ">
                    Jhon Doe
                  </p>
                  <span className=" text-gray-500">Edusity, USA</span>
                </div>
              </div>
              <p className=" text-gray-600">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </li>
            <li className=" shadow-xl mx-7 p-10 flex-col flex items-start  rounded-lg ">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={user_3}
                  alt="user 3"
                  className=" h-[72px] w-[72px]  rounded-full border-[4px] border-primary"
                />
                <div className="flex flex-col ">
                  <p className=" text-xl font-bold text-primary ">
                    Jackson Smith
                  </p>
                  <span className=" text-gray-500">Edusity, USA</span>
                </div>
              </div>
              <p className=" text-gray-600">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </li>
            <li className=" shadow-xl mx-7 p-10 flex-col flex items-start  rounded-lg  ">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={user_4}
                  alt="user 4"
                  className=" h-[72px] w-[72px]  rounded-full border-[4px] border-primary"
                />
                <div className="flex flex-col ">
                  <p className=" text-xl font-bold text-primary ">
                    Boukra Abdellah 
                  </p>
                  <span className=" text-gray-500">Edusity, USA</span>
                </div>
              </div>
              <p className=" text-gray-600">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I&apos;ve ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Testimonials