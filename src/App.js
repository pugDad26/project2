import logo from './logo.svg';
import './App.css';
import {Adding} from './Adding';

const App = () => {

  return(
    <>
      <Adding numberOne={2} numberTwo={3}/>
      <Adding numberOne={3} numberTwo={4}/>
    </>
  );
};

export default App;