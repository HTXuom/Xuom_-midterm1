import React from "react";

export function User(props) {
    const { title, firstName, lastName } = props;
    return (
        <li>
        <div id="user" data-testid="user">
            <h2>{firstName} {lastName}</h2>
            <p>{title}</p>
            </div>
        </li>
    );
}
export default User;

