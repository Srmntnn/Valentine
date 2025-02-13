import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import heartAnimation from "../assets/floating_hearts.json";

function frontPage() {
  const [text, setText] = useState("");
  const sentence =
    "We have known each other from a long time and, today I have something important to tell you...\n";
  const typingSpeed = 50; // Adjust typing speed here
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const typeSentence = (index) => {
      if (index < sentence.length) {
        setText(sentence.substring(0, index + 1));
        setTimeout(() => {
          typeSentence(index + 1);
        }, typingSpeed);
      } else {
        document.getElementById("message-button").classList.remove("hidden");
      }
    };

    typeSentence(0);

    setTimeout(() => {
      document.getElementById("front-page").classList.remove("opacity-80");
      document.getElementById("front-page").classList.add("opacity-100");
    }, 200);
  }, []);

  const floatingHeartAnimation = {
    loop: true,
    autoplay: true,
    animationData: heartAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      id="front-page"
      className="min-h-screen opacity-80 overflow-hidden w-full flex items-center justify-center flex-col gap-16 transition-opacity duration-200 ease-in-out"
    >
      <div className="absolute pointer-events-none">
        <Lottie
          options={floatingHeartAnimation}
          height={230}
          width={230}
          isClickToPauseDisabled={true}
        />
      </div>
      <div className="heart opacity-75">
        <div className="font-mono p-6 max-w-[500px] w-full">
          <p className="w-fit h-fit text-font text-start custom-color-text font-bold">
            Hi bb,
          </p>
          <p className="w-fit h-fit text-font text-start custom-color-text">
            Every moment with you is my favorite, I found my anchor, my guiding
            light and, I’m so lucky to have you!
          </p>

          <div className="text-end">~ Ulap</div>
        </div>
      </div>
      <div className="content-ask text-white z-10 flex flex-col flex-wrap gap-6 justify-center items-center">
        <div className="text px-8">
          <p className="sm:text-4xl text-2xl typing-text text-transparent font-mono bg-clip-text bg-gradient-to-br from-blue-400 to-[#36d1dc] shadow-pink-800 select-none">
            {text}
          </p>
        </div>

        <Link to="/envelope">
          <button
            id="message-button"
            className="hidden transition-all duration-200 btn glass bg-blue-500 text-gray-50 hover:text-blue-500 hover:bg-gray-200"
          >
            <div className="w-fit h-fit">
              <span className="select-none font-mono">See Message</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default frontPage;
