import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.indexVal+1}</th>
        <td><a href="">{this.props.detail.firstName}</a></td>
        <td>{this.props.detail.lastName}</td>
        <td>{this.props.detail.email}</td>
        <td>{this.props.detail.phone}</td>
        <td>{this.props.detail.status}</td>
        <td><a href="">Delete</a></td>
      </tr>
    );
  }
}

export default Contacts;