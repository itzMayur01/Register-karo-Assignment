import {
  whylogo1,
  whylogo2,
  whylogo3,
  whylogo4,
  whylogo5,
} from "../assets/assests.js";

const WhyRegisterKaro = () => {
  const whyRegisterKaroditems = [
    {
      id: 1,
      img: whylogo1,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
    },
    {
      id: 2,
      img: whylogo2,
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
    },
    {
      id: 3,
      img: whylogo3,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
    },
    {
      id: 4,
      img: whylogo4,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
    },
    {
      id: 5,
      img: whylogo5,
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
    },
  ];
  return (
    <>
      <div className="WhyRegisterKaro-main-container">
        <div className="WhyRegisterKaro-container">
          <div className="why-registerkaro-left">
            <h2 className="heading-1">WHY REGISTERKARO.IN</h2>
            <h2 className="heading-2">Why Choose Register Karo</h2>
            <p className="desc">
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </p>
            <div className="WhyRegisterKaro-cards-left">
              {whyRegisterKaroditems
                .filter((item) => item.id == 5)
                .map((item) => (
                  <div className="WhyRegisterKaro-card left-card">
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="why-registerkaro-right">
            <div className="WhyRegisterKaro-cards">
              {whyRegisterKaroditems
                .filter((item) => item.id !== 5)
                .map((item) => (
                  <div className="WhyRegisterKaro-card">
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}

              {/* <div className="WhyRegisterKaro-card">
                <img src="/assets/support.svg" alt="" />
                <h3>Support</h3>
                <p>
                  We have a dedicated support team who are always ready to help.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyRegisterKaro;
