import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from './Home/home'
// Import the Maps component to be used below
import Maps from './Maps/map'
// Import the Blogs component to be used below
import Blog from './Blogs/blogs'
// Import the NotFound component to be used below
import NotFound from './NotFound/notfound'
 // Import CSS from App.css
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Router history={history}>
                <div>
                    <header className="header">
                        <nav className="navbar container">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Lazy Loading Routes</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/maps">
                                    <span className="navbar-item">Maps</span>
                                </Link>
                                <Link to="/blog">
                                    <span className="navbar-item">Blog</span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/maps" component={Maps} />
                            <Route path="/blog" component={Blog} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </section>
                </div>
            </Router>
    )
  }
}

export default App;
