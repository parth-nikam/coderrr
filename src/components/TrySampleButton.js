import React, { useState } from "react";

const TrySampleButton = ({ loadSampleCode }) => {
  const [sampleLoaded, setSampleLoaded] = useState(false);

  const handleLoadSample = () => {
    if (!sampleLoaded) {
      const sampleHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sample Live Code Editor</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <header class="header">
            <h1>Coder</h1>
            <p>The Live Code Editor of HTML CSS JS</p>
          </header>

          <div class="content">
            <div class="box" id="box">
              <p>This box will change color</p>
            </div>
            <button onclick="changeColor()">Change Color</button>
          </div>

          <script>
            function changeColor() {
              const box = document.getElementById('box');
              const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
              box.style.backgroundColor = randomColor;
            }
          </script>
        </body>
        </html>
      `;

      const sampleCss = `
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          padding: 1rem;
        }

        .header {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 1rem 0;
        }

        .content {
          margin-top: 2rem;
          text-align: center;
        }

        .box {
          width: 450px;
          height: 200px;
          background-color: coral;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }

        button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #333;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        button:hover {
          background-color: #555;
        }
      `;

      const sampleJs = `
        function changeColor() {
          const box = document.getElementById('box');
          const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
          box.style.backgroundColor = randomColor;
        }
      `;

      loadSampleCode(sampleHtml, sampleCss, sampleJs);
      setSampleLoaded(true);
    }
  };

  return (
    <div className="content">
      <div className="box" id="box">
        <p>This box will change color</p>
      </div>
      <button onClick={handleLoadSample}>Try Sample</button>
    </div>
  );
};

export default TrySampleButton;
