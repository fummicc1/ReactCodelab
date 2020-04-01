import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Layout extends React.Component {
    navigate() {
        console.log(this.props.history);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Link to="/archives/some-other-articles" class="btn btn-warning">archives (some-other-articles)</Link>
                <Link to="/archives"><button class="btn btn-danger">archives</button></Link>,
                <Link to="/settings"><button class="btn btn-success">settings</button></Link>
                <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
            </div>
        );
    }
}

export default withRouter(Layout);