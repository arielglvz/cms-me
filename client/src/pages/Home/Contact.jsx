import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Contact = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  const filteredObj = Object.keys(contact) 
  .filter(key => key !== "_id") 
  .reduce((obj, key) => { obj[key] = contact[key]; return obj; }, {});

  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(filteredObj).map((key) => (
            <p key={key} className="ml-5 text-tertiary">
              <span className="text-tertiary">{key}</span> :{" "}
              <span className="text-tertiary">{filteredObj[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/6a509503-c9a5-4182-af9b-3756dde149f3/LsDE5oys4I.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
