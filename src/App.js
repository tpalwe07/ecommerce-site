import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Registrationpage from './component/Registrationpage';
import Loginpage from './component/Loginpage';
import Details from './component/Details';
import Privateroute from './component/Privateroute';



function App() {
  return (
    <>
      <Navbar />
      <div className='container1' my-3>
        <Routes>

          <Route path="/" element={<Loginpage />} />
          <Route path="/signup" element={<Registrationpage />} />

          <Route path="/details"
            element={
              <Privateroute>
                <Details />
              </Privateroute>
            }
          />

        </Routes>
      </div>
    </>
  );
}

export default App;
