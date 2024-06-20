import about from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

const About = ({ setPlayerState }) => {
  return (
    <section className="container ">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <div className=" basis-[40%] relative">
          <img src={about} alt="" className=" w-full rounded-xl  " />
          <img
            src={play_icon}
            alt=""
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 cursor-pointer"
            onClick={() => setPlayerState(true)}
          />
        </div>
        <div className=" basis-[55%]">
          <p className="  text-primary   text-xl uppercase font-semibold">
            about university
          </p>
          <h2 className=" normal-case text-secondary font-semibold text-4xl mb-5 mt-2">
            Nurturing Tomorrow&apos;s Leaders Today
          </h2>
          <p className=" normal-case text-gray-500 ">
            Embark on a transformative educational journey with our
            university&apos;s comprehensive education programs. Our cutting-edge
            curriculum is designed to empower students with the knowledge,
            skills, and experiences needed to excel in the dynamic field of
            education. <br /> <br /> With a focus on innovation, hands-on
            learning, and personalized mentorship, our programs prepare aspiring
            educators to make a meaningful impact in classrooms, schools, and
            communities.
            <br /> <br /> Whether you aspire to become a teacher, administrator,
            counselor, or educational leader, our diverse range of programs
            offers the perfect pathway to achieve your goals and unlock your
            full potential in shaping the future of education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About