import darkArrow from '../assets/dark-arrow.png';

const Hero = () => {
  return (
    <section className=" h-screen flex flex-col justify-center items-center hero-image">
      <h2 className=" max-w-[850px] font-bold text-white text-center lg:text-[4rem] lg:leading-[4.5rem] text-4xl">
        We Ensure better education for a better world
      </h2>
      <p className=" max-w-[600px] my-6 text-white text-center  ">
        Our cutting-edge curriculum is designed to empower students with the
        knowledge, skills, and experiences needed to excel in the dynamic field
        of education
      </p>
      <div className="cursor-pointer bg-white py-3 px-6 rounded-full text-black text-lg flex items-center gap-3">
        Explore more{" "}
        <img src={darkArrow} alt="dark arrow" className=" w-6 h-3" />
      </div>
    </section>
  );
}

export default Hero