import { useState } from "react";
import { motion } from "framer-motion";
import MessageSend from "./MessageSend";
import Image  from "../assets/hakdog.jpg";
function Ask() {
  const [yesSize, setYesSize] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    "Why are you clicking No? 😢",
    "Are you sure? I’ll be really sad... 😭",
    "Come on, give me a chance! 🥺",
    "Is there anything I can do to change your mind? 💔",
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {accepted ? (
        <div>
          <h1 className="text-2xl text-blue-400 font-mono mb-4">
            Yay! Can't wait for our date! I love you! ❤️
          </h1>
          <MessageSend />
        </div>
      ) : (
        <>
        <div className="border border-gray-400 overflow-hidden w-56 rounded-md mb-4 shadow-md">
            <img src={Image} alt="" />
        </div>
        
          <h1 className="text-lg mb-4 font-mono text-blue-400">
            Will you do me the honor of being my Valentine? 🥺❤️
          </h1>
          {questionIndex > 0 && (
            <p className="text-lg text-gray-700 mb-4 font-mono">
              {questions[questionIndex - 1]}
            </p>
          )}
          <div className="flex gap-4">
            <motion.button
              className="btn glass bg-blue-400 hover:bg-gray-200 px-8 text-white hover:text-blue-400 hover:border-blue-400 border font-mono "
              style={{ transform: `scale(${yesSize})` }}
              onClick={() => setAccepted(true)}
            >
              Yes
            </motion.button>
            <button
              className="btn glass bg-red-400 hover:bg-gray-200 px-8 text-white hover:text-red-400 hover:border-red-400 border font-mono"
              onClick={() => {
                setYesSize((prev) => prev + 0.2);
                setQuestionIndex((prev) =>
                  prev < questions.length ? prev + 1 : prev
                );
              }}
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Ask;
