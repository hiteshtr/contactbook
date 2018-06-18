import React, { Component } from 'react';
import ContactTable from "./ContactTable";
import { Link } from "react-router-dom";

class Main extends Component {
    render() {
        return <div>
            <h2 className="text-center">Your Contacts</h2>
            <ContactTable data={this.props.data} />
            <Link to="/user" type="button" className="btn btn-primary btn-lg btn-block">
              Add New Contact
            </Link>
        </div>;
    }
}

export default Main;