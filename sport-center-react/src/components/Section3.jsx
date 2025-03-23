import React from 'react';

function BMICalculator() {
    const calculateBMI = () => {
        // We are collecting height and weight data from the user
        const height = document.getElementById('height').value / 100; // cm to m
        const weight = document.getElementById('weight').value;

        if (height > 0 && weight > 0) { // If valid height and weight
            const bmi = weight / (height * height); // BMI 
            const indicator = document.getElementById('bmi-indicator');
            const bmiImage = document.getElementById('bmi-image');

            // Determine the position of the arrow based on the BMI result
            if (bmi < 18.5) {
                indicator.style.left = '15%'; // Left bottom
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                indicator.style.left = '30%'; 
            } else if (bmi >= 25 && bmi <= 29.9) {
                indicator.style.left = '50%'; // Middle
            } else if (bmi >= 30 && bmi <= 34.9) {
                indicator.style.left = '65%'; 
            } else if (bmi >= 35) {
                indicator.style.left = '80%'; // Right bottom
            }
        }
    };

    return (
        <section className="bmi">
            <div className="bmi-calculator">
                <h2>BMI Calculator</h2>
                <p>
                    Contrary to popular belief, Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dignissimos culpa dolor repellat itaque natus
                    praesentium.
                </p>
                <p>
                    Contrary to popular belief, Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dignissimos culpa dolor repellat itaque natus
                    praesentium.
                </p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="number"
                        id="height"
                        placeholder="Your Height"
                        onInput={calculateBMI}
                    />
                    <span>cm</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="number"
                        id="weight"
                        placeholder="Your Weight"
                        onInput={calculateBMI}
                    />
                    <span>kg</span>
                </div>
            </div>
            <div className="result-container">
                <h4>Your BMI</h4>
                <img src="images/bmi-index.jpg" alt="BMI Image" id="bmi-image" />
                <div id="bmi-indicator" />
            </div>
        </section>
    );
}

export default BMICalculator;