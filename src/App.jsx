// hooks
import { useState } from "react";

// components
import { InputText } from "./components/InputText";
import { OutputCSS } from "./components/OutputCSS";
import { OctocatCorner } from "./components/OctocatCorner";

// styles
import {
  brPreviewer,
  brPreviewer__wrapper,
  brPreviewer__title,
  brPreviewer__titleText,
  brPreviewer__frame,
  brPreviewer__row,
  brPreviewer__rectangle,
} from "./App.module.css";

function App() {
  const [borders, setBorders] = useState({
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
  });

  const handleBorderChange = (e, border) => {
    const newBorderValue = +e.target.value;

    if (isNaN(newBorderValue)) return;

    setBorders((prevBorders) => {
      const newBorders = { ...prevBorders };
      newBorders[border] = newBorderValue;
      return newBorders;
    });
  };

  return (
    <div className={brPreviewer}>
      <OctocatCorner />
      <div className={brPreviewer__wrapper}>
        <h1 className={brPreviewer__title}>
          <span className={brPreviewer__titleText}>[Previewer]</span>
          <span className={brPreviewer__titleText}>border-radius:</span>
        </h1>
        <div className={brPreviewer__frame}>
          <OutputCSS borders={borders} />
          <div className={brPreviewer__row}>
            <InputText
              labelText={"Top Left"}
              setBorder={handleBorderChange}
              borders={borders}
              border="topLeft"
            />
            <InputText
              labelText={"Top Right"}
              setBorder={handleBorderChange}
              borders={borders}
              border="topRight"
            />
          </div>
          <div
            className={brPreviewer__rectangle}
            style={{
              borderRadius: `
                ${borders.topLeft}px
                ${borders.topRight}px 
                ${borders.bottomRight}px 
                ${borders.bottomLeft}px
              `,
            }}
          ></div>
          <div className={brPreviewer__row}>
            <InputText
              labelText={"Bottom Left"}
              setBorder={handleBorderChange}
              borders={borders}
              border="bottomLeft"
            />
            <InputText
              labelText={"Bottom Right"}
              setBorder={handleBorderChange}
              borders={borders}
              border="bottomRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
