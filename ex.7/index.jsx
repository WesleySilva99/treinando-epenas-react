import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Member from './member'

ReactDOM.render(
    
    <Familia lastName="Silva">
        <Member name="Wesley"  />
        <Member name="Misse"  />
        <Member name="Evalnir"  />
    </Familia>, 
    document.getElementById('app')
)