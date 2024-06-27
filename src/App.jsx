import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Form from './compo/form.jsx';
import Next from './compo/next';
import Navbar from './compo/Navbar';
import Home from './compo/Home';

function App() {

  return (
    <>
      <Router>
       <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}/>
          <Route path='/form' element={<Form></Form>}/>
          <Route path='/next' element={<Next></Next>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
