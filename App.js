import logo from './logo.svg';
import './App.css';
import CardComponent from './Components/CardComponent';
import mentorship from './images/mentorship.jpg';
import stem from './images/STEM.jpg';
import scholar from './images/scholarship.png';

function App() {

  return (
   
    <div >
<CardComponent title="KEI STEM Program" images={stem}/>
<br />
<CardComponent title="KEI Menyorship  Program" images={mentorship}/>
<br/>
<CardComponent title="KEI Scholarship Program" images={scholar}/>
    </div>
  );

}

export default App;
