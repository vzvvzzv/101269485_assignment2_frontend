import './App.css';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ViewAll from './pages/ViewAll.js'
import Home from './pages/Home.js'
import View from './pages/View.js'
import Update from './pages/Update.js'
import Add from './pages/Add.js'

function App() {
  return (
      <Router>
          <Navbar bg="dark" variant="dark">
          <Container>
          <Link to='/' className='btn btn-primary'>Assignment 2</Link>&nbsp;
            <Nav className="me-auto">
              <Link to='/' className='btn btn-dark'>Home</Link>&nbsp;
              <Link to='/viewall' className='btn btn-dark'>View Employees</Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/viewall' element={<ViewAll/>} />
          <Route path='/view/:id' element={<View/>} />
          <Route path='/update/:id' element={<Update/>} />
          <Route path='/add' element={<Add/>} />
        </Routes>
      </Router>
      
  );
}

export default App;
