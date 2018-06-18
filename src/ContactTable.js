import React, { Component } from 'react';
import Contacts from "./Contacts";
import './ContactTable.css';

class ContactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {
          'firstName': 'Hitesh',
          'lastName': 'Tr',
          'email': 'hit@hit.com',
          'phone': '+91-987654321',
          'status': 'Active'
        }
      ]
    };
  }
  render() {
    var cols = [];
    for (var i = 0; i < this.state.contactData.length; i++) {
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      cols.push(<Contacts key={i} detail={this.state.contactData[i]} indexVal={i} />);
    }
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cols}
        </tbody>
      </table>
    );
  }
}

export default ContactTable;