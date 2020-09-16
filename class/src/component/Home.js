import React, { Component } from "react";
import Cources from "./Cources";
import Featecher from "./Featecher";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <div>
        
        <Header />

        <Featecher />
        <Cources />
        <Footer />
      </div>
    );
  }
}

export default Home;
