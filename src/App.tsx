import React from 'react';
import './App.css';
import { RouteProps } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { pageRoutes } from "./routes";

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    { pageRoutes.map((routeProps: RouteProps, index) => (
                        <Route { ...routeProps } key={ index }/>
                    )) }
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
