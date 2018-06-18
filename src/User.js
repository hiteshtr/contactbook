import React, { Component } from 'react';
import { Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.localSubmitHandler = this.localSubmitHandler.bind(this);
    }

    localSubmitHandler = (e) => {
        this.props.submitHandler(e, this.props.history);
    }

    render() {
        return (
            <form name="userForm" onSubmit={this.localSubmitHandler}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">First Name</label>
                        <input required type="text" className="form-control" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Last Name</label>
                        <input required type="text" className="form-control" name="lastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Email</label>
                        <input required type="email" className="form-control" name="email" placeholder="email" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Phone</label>
                        <input required type="tel" className="form-control" name="phone" placeholder="phone" />
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
                <button type="button" className="btn btn-secondary">Cancel</button>
            </form>
        );
    }
}

export default User;