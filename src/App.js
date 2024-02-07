import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Enterotp from './Components/Enterotp/Enterotp';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FamilyExpenseHomePage from './Components/FamilyExpenseHomePage/FamilyExpenseHomePage';



 
  




function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path='/home' element={<FamilyExpenseHomePage/>} />
        <Route path="/password" element={<ForgotPassword/>} />
        <Route path="/otp" element={<Enterotp/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
