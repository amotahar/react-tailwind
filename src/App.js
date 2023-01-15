import './App.css';
import AssignmentMarks from './component/AssignmentMarks/AssignmentMarks';
import Navbar from './component/Navbar/Navbar';
import PhoneBar from './component/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <h1 className="text-3xl font-bold underline">This is big projects</h1>
     <p>This is just paragraph</p>
     <AssignmentMarks></AssignmentMarks>
     <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
