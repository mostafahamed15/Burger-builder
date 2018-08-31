import React from 'react';
import Aux from '../../hoc/Auxl';
import classes from './Layout.css';
const layout =  (props) => (
    <Aux>
    <div>Toolbar, SideDrower, backDrop</div>
    <main className={classes.Content} >
        {props.children}
    </main>
    </Aux>
)

export default layout;