import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="App-body">
        <Switch>
          <Route component={HomePage} path="/" />
          <Route component={JobPage} path="/job/:id" />
        </Switch>
      </div>

      <footer className="App-footer">
        <Footer username="Joel311289" />
      </footer>
    </div>
  );
};

export default App;
