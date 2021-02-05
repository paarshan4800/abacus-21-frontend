import styles from "./App.module.css"
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'

// pages
import Homepage from "./pages/Homepage/Homepage"
import Footer from "./components/Footer/Footer"
import AboutUs from "./pages/About-Us/AboutUs"
import Events from "./pages/Events/Events"
import Workshops from './pages/Workshops/Workshops'

function App() {
  return (

    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/homepage" />
          </Route>
          <Route path="/homepage" exact component={Homepage} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/events" exact component={Events} />
          <Route path="/workshops" exact component={Workshops} />
        </Switch>
      </Router>
      <Footer />

    </>
  );
}

export default App;
