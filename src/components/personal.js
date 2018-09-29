
import React from 'react'

const Personal = ({item}) => (
<div style={{padding:'1rem'}}>
        <h4>Personal</h4>
        <div>Phone:</div>
        <div>{item.contact.cell}</div>

        <br></br>

        <div>E-mail:</div>
        <div>{item.contact.email}</div>
        {/* <h5>GitHub</h5> */}
        {/* <div>{item.github}</div> */}
</div>
)

export default Personal