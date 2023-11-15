
import { BsArrowUpRight } from "react-icons/bs";
import Testimonials from "../components/Testimonials";
import blood_donation from "../assets/homepage/blood_donation.jpeg"
import cloth_donation from "../assets/homepage/cloth_donation.jpeg"
import nukkad_natak from "../assets/homepage/nukkad_natak.jpeg"
import plantation from "../assets/homepage/plantation.jpeg"
import teaching from "../assets/homepage/teaching.jpeg"
import voting from "../assets/homepage/voting.jpeg"
// import CreateDonationForm from "../components/Forms/FinancialHelpForm";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Homepage() {

  return (
    <>
\

      {/* home page  */}
      <div id="home" className="px-12 pt-20 gap-44 items-center flex justify-center lg:h-screen h-full w-full home">
        <div className="pl-20 taglinediv">
          <h1 className="text-6xl tagline w-3/5 pr-20 text-[#24387a] font-semibold">
         <span className="kaarwaanbg"> Kaarwaa.N...</span><br />
A step for the welfare of another India.
          </h1>
          <p className="w-1/2 homepara mt-8 my-2">
          Karwaa.N.. an organisation aimed to raise the underprivileged, here we help and uplift them by numerous ways like Cloth Donations, Preparing Children for JNV(Jawahar Navodaya Vidyalaya), Blood Donations, Hosting Nukkad Natak to raise awareness about many social issues and unnoticed taboos in our society.
          </p>
          <div className="h-auto flex justify-center gap-6 py-6 w-[20rem] ">
            <Link to="/Donation">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 py-1 rounded-full bg-[#24387a] hover:bg-white hover:text-[#24387a] duration-300 hover:border-2 hover:border-[#24387a]">
              Donate Now <BsArrowUpRight />
            </button>
            </Link>
            <Link to="/tshirt">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 rounded-full border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Get Kaarwaa.N Tshirt
            </button>
            </Link>
          </div>
        </div>
        <div className="h-96 sideimg w-96 overflow-hidden border-8 border-black rounded-full">
        </div>
      </div>

      {/* about us page */}
      <div id="about" className="flex aboutdiv my-20 pt-20 flex-row">
        <div className="flex detailsdiv flex-col w-1/2">
          <div className="w-full py-4 p-12 pl-32 h-full flex items-start abouthread text-white flex-col bg-[#1e9600]">
            <h1 className="py-3">About Us</h1>
            <h1 className="text-4xl font-semibold">
             A glimpse at Kaarwaa.N
            </h1>
          </div>
          <div className="w-full aboutdetails py-4 p-12 pl-32 h-full">
            <p>
            Kaarwaa.N is a social welfare association founded by the students of Jabalpur Engineering College (JEC), Jabalpur. We are dedicated to help poor, underprivileged, downtrodden sections of the society. The primary aim of Kaarwaa.N is to tutor students for the JNV (Jawahar Navodaya Vidhyalaya) Entrance Exam and encourage “girls’ education”.
            </p>
            <p>
            We organize innumerous activities to help the marginalized and create awareness about various social issues. Addressing issues from health and hygiene to education and environment, the members of Kaarwaa.N believe in working towards making this world a better place.
            </p>
          <Link to="/aboutus">
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-white px-4 my-10 py-1 rounded-full bg-[#1e9600]">
              Meet Our Team <BsArrowUpRight />
            </button>
          </Link>
          </div>
        </div>
        <div className="aboutimage h-96 w-1/2">
          <div className="h-40 w-full imagebgdiv bg-[#24387a]"></div>
          <img
            className="image -translate-x-16"
            className="image -translate-y-12"
            src="./images/aboutusimage.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center h-full text-[#000000] w-full px-32 py-12 bg-[#24387a] programbg">
        <h1 className="text-5xl text-center">Karwaa.N.. Counter</h1>
        <p className="programdata text-center w-2/3 text-sm mt-6">
          Karwaa.N... has provided the underprivileged teaching for the JNV exam and donating clothes to the planting trees and many more pro-society works
        </p>
        <div className="w-2/3 programdata my-10 gap-4 flex-row flex justify-center ">
          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-5xl">24</h1>
            <p className="text-sm">Students Selected</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-5xl">24</h1>
            <p className="text-sm">Cloths Donated</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center sideborder">
            <h1 className="text-5xl">24</h1>
            <p className="text-sm">Trees Planted</p>
          </div>

          <div className="w-full h-24  flex flex-col justify-center items-center">
            <h1 className="text-5xl">24</h1>
            <p className="text-sm">Books Donated</p>
          </div>
        </div>
      </div>

      <h1 id="ourwork" className="text-4xl pt-20 font-semibold my-12 mt-32 text-center text-[#24387a]">
        Events hosted by <br />
        Karwaa.N...
      </h1>
      <div className="w-full flex-wrap cards my-12 justify-center px-32 flex gap-12 h-full">
        <div className="card overflow-hidden">
          <img
            className="images"
            src={nukkad_natak}
            alt=""
          />
          <div className="detailstoshow bg-[#254441]">
            <h1 className="text-xl p-4 font-semibold text-[#B2B09B]">
            Nukkad Natak:
            </h1>
            <p className="px-4 pb-2">
            Nukkad Natak - A form of street theater performed by the members to create an awareness amongst people regarding various social issues. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src={blood_donation}
            alt=""
          />
          <div className="detailstoshow bg-[#254441]">
            <h1 className="text-xl p-4 font-semibold text-[#B2B09B]">
            Blood Donation:  
            </h1>
            <p className="px-4 pb-2">
            “A single drop of blood can make a huge difference.”  Every day thousands of lives are saved when someone donates blood. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src={plantation}
            alt=""
          />
          <div className="detailstoshow bg-[#254441]">
            <h1 className="text-xl p-4 font-semibold text-[#B2B09B]">
            Plantation: 
            </h1>
            <p className="px-4 pb-2">
             In order to curb the consequences of deforestation, Kaarwaa.N conducts plantation drives wherein saplings are planted in different institutions.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src={cloth_donation}
            alt=""
          />
          <div className="detailstoshow bg-[#254441]">
            <h1 className="text-xl p-4 font-semibold text-[#B2B09B]">
            Clothes distribution: 
            </h1>
            <p className="px-4 pb-2">
           Kaarwaa.N frequently donates clothes to the less fortunate ones. The clothes are received from households and then distributed to the needy by volunteers.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src={voting}
            alt=""
          />
          <div className="detailstoshow bg-[#254441]">
            <h1 className="text-xl p-4 font-semibold text-[#B2B09B]">
            Orphanage visits: 
            </h1>
            <p className="px-4 pb-2">
           The members of Kaarwaa.N occasionally visit the orphanage to spend time with the misfortunate ones/those robbed of parental love and guidance.
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img
            className="images"
            src={teaching}
            alt=""
          />
          <div className="detailstoshow bg-[#254441]">
            <h1 className="text-xl p-4 font-semibold text-[#B2B09B]">
            Exam Prepration:
            </h1>
            <p className="px-4 pb-2">
            Kaarwaa.N aims to shine light in the dark corners of the underprivileged by educating them for these life changing exams. 
            </p>
            <button className="border-2 flex flex-row justify-center items-center gap-2 font-semibold text-[#24387a] px-4 py-1 m-4 rounded-lg border-[#24387a] hover:bg-[#24387a] hover:text-white duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* <div>
        <Tshirt />
      </div> */}

      <div>
       <Testimonials/>
      </div>
      <Footer/>
    </>
  );
}

export default Homepage;
