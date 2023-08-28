import React from "react";

const AddContact = () => {
        return (
            <div className="ui main">
                <h2>Add contact</h2>
                <form className="ui form">
                    <div className="field d-grid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="field d-grid">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <button className="btn btn-primary mt-4">ADD</button>
                </form>
            </div>
        );
}
export default AddContact;