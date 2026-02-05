import React from "react";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import cleanshot from "../../assets/img/CleanShot.png";
import logocont from "../../assets/img/logo-cont.png";
import bottomCurve from "../../assets/img/bottomCurve.svg";
const Hero = () => {
  return (
    <div className="bg-[#041527] text-white">
      <div className="max-w-[90%] m-auto py-8">
        <div className="lg:max-w-[80%] m-auto text-center mt-8">
          <h1 className="lg:text-7xl text-4xl">
            The{" "} 
            <span className="bg-gradient-to-r from-[#f2d789] to-[#e3ab7e] bg-clip-text text-transparent">
              only &nbsp;
            </span>
            AI customer <br />
            service solution you need
          </h1>
          <p className="my-4 text-2xl">
            Resolve issues faster and boost customer satisfaction -- all whike
            reducing team workload --with the only customer service solution
            you'll ever need
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 my-5">
            <Button
              btnText="Start free trial"
              btnIcon={<ArrowRight />}
              btnType="primaryBtn"
            />
            <Button
              btnText="view demo"
              btnIcon={<ArrowRight />}
              btnType="secondaryBtn"
            />
          </div>
        </div>

        <div className="text-center">
          <div>
            <img src={cleanshot} alt="" />
          </div>
          <div className="mt-8 text-sm uppercase">
            Trusted By +25,000 Buisnesses
          </div>
          <div className="relative">
            <img src={logocont} className="" alt="" />
            <div className="absolute inset-y-0 left-8 w-24 bg-gradient-to-r from-[#041527] to-transparent" />
            <div className="absolute inset-y-0 right-30 w-24 bg-gradient-to-l from-[#041527] to-transparent" />
          </div>
        </div>
      </div>
      <img src={bottomCurve} className="w-full" alt="" />
    </div>
  );
};

export default Hero;
