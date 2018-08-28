import React from 'react';
import Aux from '../../hoc/Auxl';
const layout =  (props) => (
    <Aux>
    <div>Toolbar, SideDrower, backDrop</div>
    <main>
        {props.children}
    </main>
    </Aux>
)

export default layout;