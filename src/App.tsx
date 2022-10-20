import "./index.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Display from "./components/Display/Display";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <div className="actions">
            <Display />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
