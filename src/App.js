import React from "react";
import Counter from "./ui/components/Counter";
import Form from "./ui/components/Form";
import UserList from "./ui/components/UserList";
function App() {
  return (
    <div className="App">
      <Counter/>
      <div className="ui divider"></div>
      <div className="ui container">
        <div className="ui left floated segment">
          <Form/>
        </div>
        <div className="ui four column grid segment">
          <h1>Lista degli Utenti</h1>
          <UserList/>
        </div>
      </div>
    </div>
  );
}

export default App;
