import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import AboutUs from "./pages/AboutUs";
import ApiDocs from "./pages/ApiDocs";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import routes from "./router/routeConfig";
import Routes from "./router/Routes";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container__content">
        <Routes routes={routes} />
        {/* <Switch>
          <Route exact path="/" component={ApiDocs} />
           <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />  
        </Switch>   */}
      </div>

      <Footer />
    </div>
  );
};

export default App;
