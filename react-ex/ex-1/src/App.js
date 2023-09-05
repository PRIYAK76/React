import './App.css';
import { First1 } from "./excercises/first";
import { Second } from './excercises/second';
import { Third } from './excercises/third';
import { Fourth } from './excercises/four';
import { Fifth } from './excercises/fifth';

function App() {
  
  return (
    <div className="App">
     <div>
      <First1 />
     </div>
     <div>
      <Second />
     </div>
     <div>
      <Third />
     </div>
     <div>
      <Fourth />
     </div>
     <div>
      <Fifth/>
     </div>
    </div>
  );
}

export default App;
