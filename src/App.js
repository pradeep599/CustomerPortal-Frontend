// import logo from './logo.svg';
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom';
import './App.css';

import CreateCustomer from './CreateCustomer';
import GetCustomers from './GetCustomer';
import EditCustomer from './EditCustomer';

function App() {
  return (
    <div>
      <h1>Vcube Customer Portal</h1>
      <Router>
        <Routes>
          <Route path="/" element={<CreateCustomer/>}></Route>
          <Route path="/get" element={<GetCustomers/>}></Route>
          <Route path="/edit/:id" element={<EditCustomer/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
