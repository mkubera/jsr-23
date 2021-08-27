import logo from "./logo.svg";
import "./App.css";
import ShowName from "./components/ShowName";

function App() {
  const name2 = "Mikolaj K.";
  const names = ["Mikolaj", "Andrzej", "Marta"];

  return (
    <div className="App">
      <header className="App-header">
        <p>2 + 2 = {2 + 2}</p>
        <section>
          <ShowName name={"Andrzej P."} />
          <ShowName name={name2} />
          <ShowName name={"Marta Sz."} />
        </section>
        <section>
          {names.map((name) => (
            <ShowName name={name} isPresent={true} />
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
