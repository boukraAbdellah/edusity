const Title = ({ title, subtitle }) => {
  return (
    <div className=" text-center text-primary mt-[70px] mb-[30px] uppercase font-semibold">
      <p>{subtitle}</p>
      <h2 className=" normal-case text-secondary text-4xl mt-2">{title}</h2>
    </div>
  );
};

export default Title;
