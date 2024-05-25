import React from "react";

export function User({ user }) {
    return (
        <div id="user" data-testid="user">
            <h2>
                {user.firstName} {user.lastName}{" "}
            </h2>
            <p> {user.title}</p>
        </div>
    );
}
