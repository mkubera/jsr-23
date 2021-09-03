// import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ShowName from "./components/ShowName";
import { v4 as uuidv4 } from "uuid";

function App() {
  const names = [
    { isPresent: false, name: "Mikolaj" },
    { isPresent: true, name: "Andrzej" },
    { isPresent: true, name: "Marta" },
  ];

  const btnAlertMsg = (e) => {
    console.log(e.target);
    alert("Message: Hello, world!");
  };
  const btnLabel = "Click me now, pls!";

  const inputGetUsername = (e) => {
    console.log(e.target.value);
  };
  let inputPlaceholder = "Your Username";

  return (
    <div className="App">
      <header className="App-header">
        <pre>{localStorage.getItem("uuid")}</pre>
        <pre>{uuidv4()}</pre>
        <pre>{uuidv4()}</pre>
        <h3>hi</h3>
        <ul>
          {[{ id: 1 }, { id: 2 }, { id: 3 }].map(({ id }, i) => (
            <li key={i}>id: {id}</li>
          ))}
        </ul>
        {/* <p>2 + 2 = {2 + 2}</p> */}
        {/* <section>
          <ShowName name={"Andrzej P."} />
          <ShowName name={name2} />
          <ShowName name={"Marta Sz."} />
        </section> */}
        <Input
          onInputChange={inputGetUsername}
          placeholder={inputPlaceholder}
        />
        <Button btnAlertMsg={btnAlertMsg} label={btnLabel} />
        <section>
          {names.map(({ name, isPresent }, i) => (
            <div key={i}>
              <ShowName name={name} isPresent={isPresent} />
              <p>{name}</p>
            </div>
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
