import React, {useRef} from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";
import {exportComponentAsPNG} from "react-component-export-image";

const DrawingPanel = ({width, height, selectedColor}) => {
    const panelRef = useRef();

    let rows = [];

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor}/>);
    }

    const handlerExportPng = async () => {
        await exportComponentAsPNG(panelRef)
    }

    return (
        <div id="drawingPanel">
            <div id="pixels" ref={panelRef}>
                {rows}
            </div>
            <button onClick={handlerExportPng} className="button">
                Экспортировать как .PNG
            </button>
        </div>
    );
}

export default DrawingPanel;
