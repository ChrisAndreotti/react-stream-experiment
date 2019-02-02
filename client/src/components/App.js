import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router-dom';

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
            <MemoryRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </MemoryRouter>
        </div>
    );
};

export default App;
