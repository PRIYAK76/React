import React from 'react'
import './App.css';
import ReactImageMagnify from "react-image-magnify"
import img1 from "../src/imagess/website.jpg"

function App() {
  // const images = "https://assets.website-files.com/58e46336bbd02c1a2dd27afc/59a0e9b9b4ef790001d62853_tiny-png-tiny-jpg.jpg";
  
  return (
    <div  className="App" style={{width:"400px", height:"500px"}}>
      <div style={{width:"80%"}}>
      <ReactImageMagnify {...{
      smallImage: {
          alt: 'logo',
          isFluidWidth: true,
          src: img1,
          width: 140,
          height: 162
      },
      largeImage: {
          src: img1,
          width: 836,
          height: 1100
      },
      enlargedImagePosition:'over',
      lensStyle: {backgroundColor: 'rgba(0,0,0,.6)'}
      }} />
      </div>
    </div>
  );
}

export default App;


