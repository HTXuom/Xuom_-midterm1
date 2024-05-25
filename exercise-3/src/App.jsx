import React from "react";
import { ALL_PNV_TEACHERS } from "./User";
import { User } from "./User";

function App() {
  return (
    <div id="app">
      <h1>PNV Team !!</h1>
      <p>Here are some PNV trainers and educators, do you know them?</p>
      {ALL_PNV_TEACHERS.map((teacher, index) => (
        <User key={index.id}
          firstName={teacher.firstName}
          lastName={teacher.lastName}
          title={teacher.title}   
          />
      ))}
    </div>
  );
}

export default App;
