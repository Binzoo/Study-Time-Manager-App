import React from "react";
import googlePlayImage from "../components/google-play.png";

export default function Body() {
  return (
    <>
      <div className="grid grid-cols-2 text-center h-96">
        <div>
          <img
            className=" w-96 mt-28 ml-40"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt=""
          />
        </div>

        <div className=" mt-56 place-self-end text-right mr-36 mb-20">
          <h1 className=" text-4xl">Download Now</h1>
          <h2 className=" text-2xl">Lorem Ipsum</h2>

          <button className="bg-orange-400 mt-4 h-10 rounded-md w-40 ">
            <div className="flex mt-1 text-center justify-center">
              <img className=" h-6" src={googlePlayImage} alt="" />
              <div className="ml-2">
                <strong>Download</strong>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
