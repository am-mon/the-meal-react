import React, { useContext } from "react";
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import TopBanner from "./TopBanner";
import PageTemplate from "./PageTemplate";

const Contact = () => {
  return (
    <>
      <TopBanner>Contact</TopBanner>
      <PageTemplate>
        <div className="flex flex-wrap justify-between">
          <div className="w-[100%] md:w-[50%] box-border px-0 md:pr-10 mb-10">
            <ul>
              <li className="mb-3 flex items-center">
                <span className="mr-2 text-lg">
                  <BsTelephone />
                </span>
                <span>+00-0000-000</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="mr-2 text-lg">
                  <FaFax />
                </span>
                <span>+00-0000-000</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="mr-2 text-lg">
                  <MdOutlineEmail />
                </span>
                <span> sample@sample.com</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="mr-2 text-lg">
                  <FiMapPin />
                </span>
                <span>
                  Voluptas quibusdam perferendis doloribus <br />
                  autem non culpa recusandae nemo eum
                </span>
              </li>
            </ul>
            <ul className="flex text-xl mt-10 justify-start">
              <li className="mr-4 hover:text-[#3b5998]">
                <Link>
                  <TfiFacebook />
                </Link>
              </li>
              <li className="mr-4 hover:text-[#00acee]">
                <Link>
                  <BsTwitter />
                </Link>
              </li>
              <li className="mr-4 hover:text-[#d62976]">
                <Link>
                  <FiInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[100%] md:w-[50%] box-border px-0 md:pl-10">
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem
              perferendis ipsum natus, quasi distinctio possimus minima
              repellendus nobis error fugiat, id odio dolorum quaerat quia,
              molestias facilis. In, aliquam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptas quibusdam perferendis
              doloribus autem non culpa recusandae nemo eum! Magnam quos
              accusamus vel itaque laboriosam ad voluptas, recusandae nihil iste
              soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam ducimus obcaecati? Molestiae dolorum praesentium
              ad optio voluptatibus modi facilis maiores dignissimos unde error
              est cumque, atque officia, reprehenderit quasi?
            </p>
          </div>
        </div>
      </PageTemplate>
    </>
  );
};

export default Contact;
