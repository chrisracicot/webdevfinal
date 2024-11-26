import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Certificates from "./components/Certificates";
import WebApps from "./components/WebApps";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Certificates />
      <WebApps />
      <Footer />
    </div>
  );
}

export default App;
