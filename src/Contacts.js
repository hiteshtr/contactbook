import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.detail.id}</th>
        <td><Link to={"/user/" + this.props.detail.id}>{this.props.detail.firstName}</Link></td>
        <td>{this.props.detail.lastName}</td>
        <td>{this.props.detail.email}</td>
        <td>{this.props.detail.phone}</td>
        <td>{this.props.detail.status}</td>
        <td><a href="" onClick={(e) => this.props.deleteHandler(this.props.detail.id, e)}>Delete</a></td>
      </tr>
    );
  }
}

export default Contacts;