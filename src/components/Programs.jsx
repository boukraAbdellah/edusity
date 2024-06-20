import Title from "./Title"
import program_1 from "../assets/program-1.png";
import program_2 from "../assets/program-2.png";
import program_3 from "../assets/program-3.png";
import icon_1 from "../assets/program-icon-1.png";
import icon_2 from "../assets/program-icon-2.png";
import icon_3 from "../assets/program-icon-3.png";




const Programs = () => {
  return (
    <div className=" container">
      <Title title={"what we offer"} subtitle={"our programs"} />
      <div className=" flex justify-between items-center mx-auto my-[80px] w-[90%]">
        <div className="group relative basis-[31%]">
          <img src={program_1} alt="" className=" w-full rounded-lg " />
          <div className=" absolute top-0 right-0 bottom-0 gap-2  w-full h-full text-white bg-[#414fc960] transition-transform  duration-500 ease-in-out transform translate-y-full overflow-hidden group-hover:translate-y-0 group-hover:flex hidden  items-center justify-center flex-col">
            <img src={icon_1} alt="" className="h-12 w-10" />
            <p className=" text-lg font-medium">Graduation Degree</p>
          </div>
        </div>

        <div className="relative group basis-[31%]">
          <img src={program_2} alt="" className=" w-full rounded-lg " />
          <div className=" absolute top-0 right-0 bottom-0 gap-2  w-full h-full text-white bg-[#414fc960] transition-transform  duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:flex hidden  items-center justify-center flex-col">
            <img src={icon_2} alt="" className=" w-10" />
            <p className=" text-lg font-medium">Master Degree</p>
          </div>
        </div>

        <div className="relative group basis-[31%]">
          <img src={program_3} alt="" className=" w-full rounded-lg " />
          <div className=" absolute top-0 right-0 bottom-0 gap-2  w-full h-full text-white bg-[#414fc960] transition-transform  duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:flex hidden  items-center justify-center flex-col">
            <img src={icon_3} alt="" className=" w-10" />
            <p className=" text-lg font-medium">Post Graduation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs