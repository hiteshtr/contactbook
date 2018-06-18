import React, { Component } from 'react';
import { Link } from "react-router-dom";

class User extends Component {
    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input type="text" className="form-control" id="inputFirst" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="text" className="form-control" id="inputLast" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="email" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Phone</label>
                        <input type="tel" className="form-control" id="inputPhone" placeholder="phone" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Status</label>
                        <select id="inputStatus" className="form-control">
                            <option selected>Choose...</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button type="button" class="btn btn-secondary">Cancel</button>
            </form>
        );
    }
}

export default User;