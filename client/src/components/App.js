import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            <h1>Page One</h1>
            <Link to='/pagetwo'>page two</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            <h1>Page Two</h1>
            <Link to='/'>page one</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
