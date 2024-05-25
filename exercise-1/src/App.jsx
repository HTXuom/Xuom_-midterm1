import React from "react";
import { User } from "./User";

export const userData = {
  firstName: "Ronan", // feel free to replace the name value
  lastName: "Ogor", // feel free to replace the name value
  title: "PN React JS Killer", // feel free to replace the title value
};


// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <ul>
        {userData.map((item) => (
          <User
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            title={item.title}
           
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
