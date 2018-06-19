import React, { Component } from 'react';
import Contacts from "./Contacts";

class ContactTable extends Component {
  render() {
    if (this.props.data.length) {
      let cols = [];
      for (var i = 0; i < this.props.data.length; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        cols.push(<Contacts key={i} detail={this.props.data[i]} deleteHandler={this.props.deleteHandler} />);
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
    } else {
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
            <tr>
              <td className="text-center" colSpan="7">No contact details to show</td>
            </tr>
          </tbody>
        </table>
      );
    }

  }
}

export default ContactTable;