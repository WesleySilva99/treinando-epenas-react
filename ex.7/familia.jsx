import React from 'react'
import {ChildrenWithProps} from '../util/reactUtil.js'

export default props => (
    <div>
        <h1>Família</h1>
        {ChildrenWithProps(props.children, props)}
    </div>
)