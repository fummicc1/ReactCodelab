import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {title: "Loading..."}
    }

    render() {
        setTimeout(() => {
            this.setState({title: "Welcome!"})
        }, 1000);
        return (                        
            <div>           
                {this.state.title}     
                <Header/>
                <Footer/>
            </div>
        );
    }
}

const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);