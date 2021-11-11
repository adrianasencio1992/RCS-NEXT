import React, { useState } from "react";
export default function App() {
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        colors: {
          red: true,
          green: false,
          blue: true,
          yellow: false,
          cyan: false,
        },
      };
    }

    handleClick = (event) => {
      const { name, checked } = event.target;

      this.setState((prevState) => {
        const colors = prevState.colors;
        colors[name] = checked;
        return colors;
      });
    };
    render() {
      const favColors = Object.keys(this.state.colors)
        .filter((key) => this.state.colors[key])
        .join(", ");

      return (
        <SCGithub>
          <form name="formulario">
            <div className="div-trigeneral-input">
              <input type="checkbox" name="checkbox" value="checkbox"></input>
              Baño completo
            </div>
            <div className="div-trigeneral-input">
              <input name="checkbox" type="checkbox" value="checkbox" />
              Aseo
            </div>
            <div className="div-trigeneral-input">
              <input ame="checkbox" type="checkbox" value="checkbox" />
              Cambio bañera por plato
            </div>
            <div className="div-total">
              <p className="p-total" type="text" name="total" value="0">
                Total de la reforma:
              </p>
              <div className="input-div"></div>
            </div>
          </form>
        </SCGithub>
      );
    }
  }
}
