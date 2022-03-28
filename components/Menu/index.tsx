import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Settings from "./Settings";

const Menu = () => (
  <Popup
    trigger={
      <button>
        <Settings />
      </button>
    }
    position="right center"
  >
    <div>Popup content here !!</div>
  </Popup>
);

export default Menu;
