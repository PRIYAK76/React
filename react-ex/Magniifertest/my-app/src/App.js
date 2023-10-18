import ReactImageMagnify from "react-image-magnify"
import Magnifier from "react-magnifier";
import img1 from "../src/imagess/website.jpg"
import './App.css';
import Sildeshow from "./sildeshow";

function App() {
  // return (
  //   // <div  className="App" style={{width:"800px", height:"500px"}}>
  //   //   <div style={{width:"80%"}}>
  //   //   <ReactImageMagnify {...{
  //   //   smallImage: {
  //   //       alt: 'logo',
  //   //       isFluidWidth: true,
  //   //       src: img1,
  //   //       width: 10,
  //   //       height: 162
  //   //   },
  //   //   largeImage: {
  //   //       src: img1,
  //   //       width: 836,
  //   //       height: 1100
  //   //   },
  //   //   enlargedImagePosition:'over',
  //   //   lensStyle: {backgroundColor: 'rgba(0,0,0,.6)'}
  //   //   }} />
  //   //   </div>
  //   // </div>
  //    <Magnifier src={img1} width={500} /> 
  // );
  return (
  <Sildeshow/>
  );
}

export default App;
{/* <Magnifier src={img1} width={500} /> */}