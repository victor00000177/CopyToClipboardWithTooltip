import * as React from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";
import CopyToClipboard from "./CopyToClipboard";

function App() {
  return (
    <div className="App">
      <h1>Example MUI copy to clipboard with a button</h1>
      <CopyToClipboard>
        {({ copy }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => copy("some text!")}
          >
            Copy
          </Button>
        )}
      </CopyToClipboard>

      <p>
        <textarea placeholder="for testing paste" />
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
