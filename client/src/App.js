import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from 'components/layouts/Navbar';
import { FeedLayout } from 'components/feed/FeedLayout';
import { Dashboard } from 'pages/dashboard/Dashboard';
import { Login } from 'components/login/Login';
import { NetworkLayout } from 'components/network/NetworkLayout';
import { NewPost } from 'components/posts';
import BussinessDashboard from 'pages/bussiness/BussinessDashboard';
import BussinessLayoutRoutes from 'components/layouts/BussinessLayout';
import LifeLayout from 'components/layouts/LifeLayout';

function App() {
  return (
    <BrowserRouter>
     
          <Routes>
            <Route exact path='/' element={<LifeLayout component={Dashboard} />} />
            <Route exact path='/posts' element={<LifeLayout component={Dashboard} />} />
            <Route exact path='/post/create' element={<LifeLayout component={NewPost} />} />

            <Route exact path='/login' element={<Login />} />
            <Route exact path='/bussiness' element={<BussinessDashboard />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
