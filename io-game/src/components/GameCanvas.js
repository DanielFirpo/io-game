import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { setCanvas } from "./../actions/actions"

import entryPoint from "../GameScripts/CircleOfSanity"

function GameCanvas(props) {

    let canvasRef = React.createRef();

    const [canvas, setCanvas] = useState();

    //resize canvas to match the window's size
    function resizeCanvasToMatchWindow() {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    //start listening for window resizes, and do an initial canvas resize
    useEffect(() => {
        resizeCanvasToMatchWindow()//initial resize
        //we don't have to worry about adding duplicate listeners on every render; addEventListener will only add the same function once.
        window.addEventListener('resize', resizeCanvasToMatchWindow)//next time the user resizes browser, resizeCanvasToMatchWindow() will be called.
    }, )

    //wait for the canvas to be added to DOM, then save the element to state
    useEffect(() => {
        setCanvas(canvasRef.current);
    }, [canvasRef])

    //this component's work is done, we've rendered the canvas and got it ready for other scripts to use. Set it to redux state.
    useEffect(() => {
        if (canvas) {
            props.setCanvas(canvas);
            entryPoint();
        }
    }, [canvas])

    return (
            <div id="canvas-container">
                <canvas
                    style={{ width: "100%", height: "100%" }}
                    // onTouchMove={(e) => { if (gameLoop) gameLoop.updateMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY }); console.log("Touch") }}
                    // onMouseMove={(e) => { if (gameLoop) gameLoop.updateMousePosition({ x: e.pageX, y: e.pageY }) }}
                    ref={canvasRef}
                    id="game">
                </canvas>
            </div>
    );

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { setCanvas })(GameCanvas);
