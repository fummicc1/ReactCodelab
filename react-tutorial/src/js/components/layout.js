import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {title: "Welcome..."};
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>               
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
                <Footer/>
            </div>
        );
    }
}

const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);