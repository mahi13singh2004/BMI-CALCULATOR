import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [text, setText] = useState("Please Enter");
  const [image, setImage] = useState("");

  const calculateBMI = (event) => {
    event.preventDefault();

    if (height === "" || weight === "") {
      alert("Please enter valid data!");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
      alert("Please enter valid numbers!");
      return;
    }

    const bmiValue = weightNum / (heightNum * heightNum);
    setBmi(bmiValue.toFixed(1));

    let resultText = "";
    let resultImage = "";

    if (bmiValue < 25) {
      resultText = "You are underweight";
      resultImage =
        "https://th.bing.com/th/id/OIP.6I2K9sVst9y3SZIsiAGmiQHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      resultText = "You are healthy";
      resultImage =
        "https://th.bing.com/th/id/OIP.bt0m5QrHPivHiv9I5ed_AgHaH1?w=135&h=180&c=7&r=0&o=5&pid=1.7";
    } else {
      resultText = "You are overweight";
      resultImage =
        "https://th.bing.com/th/id/OIP.ykmp-io55EkLxIGJ5IhQEQHaH0?w=199&h=210&c=7&r=0&o=5&pid=1.7";
    }

    setText(resultText);
    setImage(resultImage);
  };

  const clear = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setText("Please Enter");
    setImage("");
  };

  return (
    <div className="app flex justify-center items-center w-full h-screen bg-white">
      <div className="p-5 inside shadow-md shadow-black rounded-md">
        <h1 className="heading mb-4 text-3xl font-extrabold font-serif">
          BMI CALCULATOR
        </h1>
        <form onSubmit={calculateBMI}>
          <div className="mb-3">
            <label className="block mb-1 font-semibold">Weight (Kg)</label>
            <input
              onChange={(event) => setWeight(event.target.value)}
              className="border-2 w-full p-2"
              type="number"
              value={weight}
            />
          </div>
          <div>
            <label className="block font-semibold">Height (meter)</label>
            <input
              onChange={(event) => setHeight(event.target.value)}
              className="border-2 w-full p-2 mb-6"
              type="number"
              value={height}
            />
          </div>
          <div>
            <button
              className="block bg-black w-full mb-3 p-1 text-white rounded-md"
              type="submit"
            >
              Submit
            </button>
            <button
              className="block bg-black w-full p-1 text-white rounded-md"
              onClick={clear}
              type="button" // Changed to "button" to prevent form submission
            >
              Clear
            </button>
          </div>
        </form>

        <div>
          <h2 className="text-center mt-3 text-xl font-bold">
            Your BMI is: {bmi}
          </h2>
          <p className="text-center mt-2 text-lg">{text}</p>
        </div>

        <div className="image-section h-100 flex justify-center">
          {image && <img className="w-56 h-56" src={image} alt="" />}
        </div>
      </div>
    </div>
  );
}

export default App;
