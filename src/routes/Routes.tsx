import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../views/Home';
import About from '../views/About';
import Events from '../views/Events';
import Join from '../views/Join';
import Contact from '../views/Contact';
import NotFound from '../views/NotFound';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route key="global-home" path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/join" component={Join} />
            <Route path="/contact" component={Contact} />
            <Route key="global-404" component={NotFound} />
        </Switch>
    );
};

export default Routes;
