import React, { Component } from 'react';
import { Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.localSubmitHandler = this.localSubmitHandler.bind(this);
        this.localUpdateHandler = this.localUpdateHandler.bind(this);
    }

    localSubmitHandler = (e) => {
        this.props.submitHandler(e, this.props.history);
    }

    localUpdateHandler = (e) => {
        this.props.updateHandler(e, parseInt(this.props.match.params.id, 10), this.props.history);
    }

    render() {
        if (this.props.match.path === "/user/:id") {
            let user = this.props.userData.find(function (elem) {
                return elem.id === parseInt(this.props.match.params.id, 10);
            }, this);
            return (
                <form name="userForm" onSubmit={this.localUpdateHandler}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">First Name</label>
                            <input required type="text" pattern="^[a-zA-Z]+$" defaultValue={user.firstName} className="form-control" name="firstName" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Last Name</label>
                            <input required type="text" pattern="^[a-zA-Z]+$" defaultValue={user.lastName} className="form-control" name="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Email</label>
                            <input required type="email" defaultValue={user.email} className="form-control" name="email" placeholder="email" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Phone</label>
                            <input required type="tel" maxLength="9" pattern="[7-9]{1}[0-9]{8}" defaultValue={user.phone} className="form-control" name="phone" placeholder="phone" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">Status</label>
                            <select name="status" defaultValue={user.status} className="form-control" required>
                                <option value="">Choose...</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                    <Link to="/" className="btn btn-secondary">Cancel</Link>
                </form>
            );
        }
        return (
            <form name="userForm" onSubmit={this.localSubmitHandler}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">First Name</label>
                        <input required type="text" pattern="^[a-zA-Z]+$" className="form-control" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Last Name</label>
                        <input required type="text" pattern="^[a-zA-Z]+$" className="form-control" name="lastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Email</label>
                        <input required type="email" className="form-control" name="email" placeholder="email" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Phone</label>
                        <input required type="tel" maxLength="9" pattern="[7-9]{1}[0-9]{8}" className="form-control" name="phone" placeholder="phone" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Status</label>
                        <select name="status" defaultValue="" className="form-control" required>
                            <option value="">Choose...</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/" className="btn btn-secondary">Cancel</Link>
            </form>
        );
    }
}

export default User;