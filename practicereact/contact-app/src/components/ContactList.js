import React from "react";

import { useEffect } from "react";

const ContactList =(contacts)=>{

    useEffect(() => {
        console.log("useEffect with []")
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contacts.name}</div>
                    <div>{contacts.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        )
      }, [contacts])

    return(
        <div className="ui celled list">
            ContactList
        </div>
    )
}
export default ContactList;