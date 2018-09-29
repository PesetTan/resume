import React from 'react'
import Rank from './rank';

const Github = ({item}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250',
            padding: '1rem'
        }}>
            <h4>Github</h4>
            <a href="https://github.com/PesetTan">https://github.com/PesetTan</a>
        </div>
    )
}

export default Github