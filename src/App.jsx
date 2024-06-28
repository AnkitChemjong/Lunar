import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './compo/signin.jsx';
import Login from './compo/login';
import Navbar from './compo/Navbar';
import Home from './compo/Home';


function App() {

  return (
    <>
      <Router>
       <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}/>
          <Route path='/form' element={<Signin></Signin>}/>
          <Route path='/next' element={<Login></Login>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
