import React, {useState} from "react";
import "../styles/editor.scss";
import {CirclePicker} from "react-color";
import DrawingPanel from "./DrawingPanel";

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("начать рисовать");
    const [selectedColor, setColor] = useState("#f44336");

    const initializeDrawingHandlerPanel = () => {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "начать рисовать"
            ? setButtonText("обновить")
            : setButtonText("начать рисовать");
    }

    const changeColor = (color) => {
        setColor(color.hex);
    }

    const onChangeHandlerWidth = (event) => {
        setPanelWidth(event.target.value);
    }

    const onChangeHandlerHeight = (event) => {
        setPanelHeight(event.target.value);
    }

    return (
        <div id="editor">
            <h1>Создай свой пиксель арт</h1>
            {hideDrawingPanel && <h2>Введите размеры изображения</h2>}
            {hideDrawingPanel && (
                <div id="options">
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelWidth}
                            onChange={onChangeHandlerWidth}
                        />
                        <span>Ширина</span>
                    </div>
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelHeight}
                            onChange={onChangeHandlerHeight}
                        />
                        <span>Высота</span>
                    </div>
                </div>
            )}

            <button onClick={initializeDrawingHandlerPanel} className="button">
                {buttonText}
            </button>

            {hideOptions && (
                <CirclePicker color={selectedColor} onChangeComplete={changeColor}/>
            )}

            {hideOptions && (
                <DrawingPanel
                    width={panelWidth}
                    height={panelHeight}
                    selectedColor={selectedColor}
                />
            )}
        </div>
    );
}

export default Editor;