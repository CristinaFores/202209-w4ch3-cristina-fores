import "./index.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Display from "./components/Display/Display";
import Actions from "./components/Actions/Actions";

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
            <Actions />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
