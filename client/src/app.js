import React, { Component } from "react";
import "./style.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="overlay">
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto page-heading margin-top-20">
                            <p className="App-intro">{this.state.apiResponse}</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;