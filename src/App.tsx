import "./index.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Display from "./components/Display/Display";
import Actions from "./components/Actions/Actions";
import ActionCalling from "./components/ActionCalling/ActionCalling";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <ActionCalling />
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
