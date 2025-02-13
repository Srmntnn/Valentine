import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/envelope.css";
import { Link } from "react-router-dom";

export default function EnvelopeWithCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="lid one cursor-pointer"></div>
      <div className="lid two cursor-pointer"></div>
      <div className="envelope cursor-pointer"></div>
      <div className="letter font-mono shadow-sm border p-4">
        <p className="text-start">Happy Valentine's Day!</p>
        <p className="text-center">I have Written Something For You.</p>
        <Link to="/ask">
          <button className="mt-2 btn glass bg-blue-500 text-gray-50 hover:text-blue-500 ">
            continue
          </button>
        </Link>
      </div>
    </div>
  );
}
