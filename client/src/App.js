import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
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
     
          <Switch>
            
            <LifeLayout exact path="/" component={Dashboard} />
            <LifeLayout exact path="/posts" component={Dashboard} />
            <LifeLayout exact path="/post/create" component={NewPost} />
            <LifeLayout exact path="/login" component={Login} />

            <BussinessLayoutRoutes exact path='/bussiness' component={BussinessDashboard} />
          </Switch>
    </BrowserRouter>
  );
}

export default App;
