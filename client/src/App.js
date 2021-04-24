import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { FeedLayout } from './components/feed/FeedLayout';
import { Navbar } from './components/layouts/Navbar';
import { NetworkLayout } from './components/network/NetworkLayout';
import { CreatePost } from './components/posts/CreatePost';
import { Posts } from './components/posts/Posts';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="grid md:grid-cols-4 pt-4" >
        <div className="md:col-span-1">
          <FeedLayout />
        </div>
        <div className="md:col-span-2 p-8">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/post/create" component={CreatePost} />
          </Switch>
        </div>
        <div className="md:col-span-1">
          <NetworkLayout />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
