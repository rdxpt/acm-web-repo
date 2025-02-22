import React from "react";

const About = () => {
return (
    <section className="flex justify-center items-center flex-col mb-36 scale-[0.8]">
        <h1 className="text-center text-[64px] font-[700] mb-10 leading-tight">
            ABOUT <span className="text-[#8FCDFF]">US</span>
        </h1>
        <div className="bg-[#D9D9D9] bg-opacity-[15%] text-center text-[40px] flex justify-center items-center w-[60%] p-20 rounded-[2rem] font-[600] leading-tight">
            <p className="">
                Dive into the exciting domains of Data Science, Machine Learning, Deep
                Learning, and Natural Language Processing with us.{" "}
            </p>
        </div>
    </section>
);
};

export default About;
