import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};


function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <ul>
        {vinhData.map((item) => (
          <User
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            title={item.title}

          />
        ))}
      </ul>
      <ul>
        {myData.map((item) => (
          <Userc
            lastName={item.lastName}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
