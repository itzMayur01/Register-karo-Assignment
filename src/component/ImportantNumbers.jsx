import React from "react";

const ImportantNumbers = () => {
  const impNumber = [
    {
      number: "1M",
      title: "Customers",
    },
    {
      number: "12",
      title: "Years of Excellence",
    },
    {
      number: "41",
      title: "R&D Engineers",
    },
    {
      number: "78",
      title: "Countries",
    },
    {
      number: "3287",
      title: "PARTNERS",
    },
    {
      number: "41",
      title: "Awards Received",
    },
  ];
  return (
    <>
      <div className="important-number-container">
        <h2 className="heading-1">Why Register karo</h2>
        <h2 className="heading-2">Some Numbers are important</h2>
        <div className="number-box-container">
          {impNumber.map((data) => (
            <div className="number-box">
              <h3>
                {data.number}
                <sup>+</sup>
              </h3>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImportantNumbers;
