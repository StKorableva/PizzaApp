import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';

import Header from "./components/header/index.js";
import PizzaPage from "./components/pizza/index.js";
import DrinkPage from "./components/drink/index.js";
import Footer from "./components/footer/index.js";
import Cart from "./components/cart";
import OrderHistory from "./components/order-history";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/PizzaApp/" exact>
                        <PizzaPage />
                    </Route>
                    <Route path="/PizzaApp/drink">
                        <DrinkPage />
                    </Route>
                    <Route path="/PizzaApp/cart">
                        <Cart />
                    </Route>
                    <Route path="/PizzaApp/history">
                        <OrderHistory />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;


