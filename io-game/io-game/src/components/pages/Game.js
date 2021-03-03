import React, { useEffect, useState } from 'react';

import GameCanvas from "./../GameCanvas"

function Game() {

    return (
        <div id="game">
            <GameCanvas></GameCanvas>
        </div>
    );

}

export default (GameCanvas);
