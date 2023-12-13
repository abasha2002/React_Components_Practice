import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorldButton from "./HelloWorld";
import "./style.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

class App extends React.Component{
    render(){
        return(
            <>
                <Navbar />
                <HelloWorldButton />
                <Footer />
            </>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);