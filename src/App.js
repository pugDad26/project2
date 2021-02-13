import logo from './logo.svg';
import './App.css';
import {Adding} from './Adding';

const App = () => {

  return(
    <>
      <div
        class="divForStyle"
      >
        <Adding numberOne={2} numberTwo={3}/>
        <Adding numberOne={3} numberTwo={4}/>
      </div>
    </>
  );
};

export default App;