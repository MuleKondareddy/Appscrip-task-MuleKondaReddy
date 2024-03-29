// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Route and Routes
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductsList";
import Shop from "./pages/Shop";
import Skills from "./pages/Skills";
import Stories from "./pages/Stories";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import "./App.css"; // Import CSS file for styling

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
