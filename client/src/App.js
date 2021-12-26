import { BrowserRouter, Routes, Route } from 'react-router-dom';

//routing
import AuthRoutes from './components/routing/AuthRoutes';
import PrivateRoutes from './components/routing/PrivateRoutes/PrivateRoutes';

//Auth Coponents
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Index from './components/indexPage/indexPage';

//Private Components
import Learnings from './components/privateViews/myLearnings/Learnings'
import ShowLearning from './components/privateViews/myLearnings/learning/showLearning/ShowLearning'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AuthRoutes />}>
          <Route index element={<Index />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/mylearnings' element={<PrivateRoutes />}>
          <Route index element={<Learnings />} />
          <Route path=':id' element={<ShowLearning />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
