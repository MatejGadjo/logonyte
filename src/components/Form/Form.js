import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import SubmitSuccModal from "../Modal/SubmitSuccModal";
import SubmitFailModal from "../Modal/SubmitFailModal";
import RequestLimitModal from "../Modal/RequestLimitModal";
import { useTrail, animated } from "react-spring";

const Form = () => {

  const { user } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [showRequestLimitModal, setShowRequestLimitModal] = useState(false);


  const [formData, setFormData] = useState({
    email: user ? user.email : "",
    username: user ? user.username : "",
    style: "",
    icons: "",
    slogan: "",
    yourindustry: "",
    colortheme: "",
  });

  const labels = [
    "Style",
    "Icons",
    "Slogan",
    "Your Industry",
    "Color Theme",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setShowFailModal(true);
      return;
    }

    fetch("http://localhost:3000/customlogo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 403) {
          setShowRequestLimitModal(true); // Show the request limit modal
        } else if (response.status === 200) {
          // Success response
          setFormData({
            email: user ? user.email : "",
            username: user ? user.username : "",
            style: "",
            icons: "",
            slogan: "",
            yourindustry: "",
            colortheme: "",
          });
          setShowModal(true); // Show the success modal
        } else {
          // Handle other response statuses if needed
          console.error("Error:", response.status);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });

  };

  const closeModal = () => {
    setShowModal(false);
    setShowFailModal(false);
    setShowRequestLimitModal(false);
  }

  const trail = useTrail(labels.length, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 200 }, // Adjust the duration as needed
  });

  return (
    <div className="flex justify-center pl-16 sm:pl-0 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="mt-10 mb-10 text-center title_text font-semibold w-64 sm:w-[25rem] md:w-[32rem] lg:w-[42rem] xl:w-[50rem] text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">Fill out the form,<br /><span className="magic font-extrabold"> LogoNyte</span> will take care of the rest</h1>
        <div className="flex items-center justify-center border-2 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-2xl w-60 sm:w-[25rem] md:w-[32rem] lg:w-[39rem]">
          <form onSubmit={handleSubmit} className="text-white">
            {trail.map((props, index) => (
              <animated.div key={index} style={props}>
                <label className="flex items-center justify-center p-2 sm:text-lg md:text-xl lg:text-2xl">
                  {labels[index]}
                </label>
                <div className="flex flex-col justify-center items-center">
                  <input
                    type="text"
                    name={labels[index].toLowerCase().replace(/\s+/g, '')}
                    placeholder={`ex. ${labels[index]}`}
                    value={formData[labels[index].toLowerCase().replace(/\s+/g, '')]}
                    onChange={handleChange}
                    className="placeholder:italic placeholder:text-center placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-lg mb-5 rounded-lg border-2 border-gray-900 px-2 w-1/2 sm:w-3/4 md:w-5/6 lg:w-full"
                  />
                </div>
              </animated.div>
            ))}
            <button className="btn btn-md 2xl:btn-lg sm:w-28 btn-outline lg:mt-2 xl:mt-4 2xl:mt-6" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      {showModal && <SubmitSuccModal closeModal={closeModal} />}
      {showFailModal && <SubmitFailModal closeModal={closeModal} />}
      {showRequestLimitModal && <RequestLimitModal closeModal={closeModal} />}
    </div >
  )
}

export default Form;


