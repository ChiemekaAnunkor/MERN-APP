import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Product from "./components/products/Product";

const App = () => {
  return (
    //browswer routers lets us creat routes
    <BrowserRouter>
      <Container maxWidth="lg">
        {/* navbar is left outside the switch because we want it to be always visable */}
        <NavBar />

        <Routes>
          {/* switch routes with switch, add routes to the different pages */}
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/products/:id" exact element={<Product />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
