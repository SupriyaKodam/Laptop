import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Lenovo from './Components/Lenovo';
import Navbar from './Components/Navbar';
import Apple from './Components/Apple'
import Dell from './Components/Dell';
import Hp from './Components/Hp';
import LessFiftythousand from './Components/lessFiftythousand';
import LessThan1lakh from './Components/Lessthan1lakh';
import LessThan1lakh50 from './Components/Lessthan1lakh50';
import LessThan2lakh from './Components/Lessthan2lakh';
import LessThan3lakh from './Components/Lessthan3lakh';
import Inteli3 from './Components/Inteli3';
import Inteli5 from './Components/Inteli5';
import Inteli7 from './Components/Inteli7';
import LoginorRegister from './Components/LoginorRegister';
import AboutUs from './Components/Aboutus';
import ReadMore1 from './Components/ReadMore1';
import ReadMore2 from './Components/ReadMore2';
import ReadMore3 from './Components/ReadMore3';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/lenovo" element={<Lenovo />} />
        <Route path="/apple" element={<Apple/>}/>
        <Route path="/dell" element={<Dell/>}/>
        <Route path="/hp" element={<Hp/>}/>
        <Route path='/lessthan50thousand' element={<LessFiftythousand/>}/>
        <Route path='/lessthan1lakh'element={<LessThan1lakh/>}/>
        <Route path='/lessthan1lakh50' element={<LessThan1lakh50/>}/>
        <Route path='/lessthan2lakh' element={<LessThan2lakh/>}/>
        <Route path='/lessthan3lakh' element={<LessThan3lakh/>}/>
        <Route path='/i3' element={<Inteli3/>}/>
        <Route path='/i5' element={<Inteli5/>}/>
        <Route path='/i7' element={<Inteli7/>}/>
        <Route path='/lr' element={<LoginorRegister/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/read1' element={<ReadMore1/>}/>
        <Route path='/read2' element={<ReadMore2/>}/>
        <Route path='/read3' element={<ReadMore3/>}/>
      </Routes>
    </Router>
  );
};

export default App;
