import React from 'react';
import classNames from 'classnames';

import '../styles/Tile.scss';

const Tile = ({ children, containerStyle }) => {
    return (
        <div className={classNames("tile__container", containerStyle)}>
            {children}
        </div>
    );
}

export default Tile;
