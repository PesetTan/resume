
import React from 'react'

const Rank = ({value}) => {
    let ranking = [];

    for (let i=1; i<=5; i++) {
        ranking.push (
                <span style={{
                height:'1rem',
                width:'1rem',
                backgroundColor:(i > value) ? 'lightgrey' : 'rgb(50,50,100)',
                borderRadius:'50%',
                display: 'inline-block',
                border:(i > value) ? 'lightgrey' : 'rgb(50,50,100)',
                borderStyle:'solid',
                margin: '0 0.05rem'
            }}></span>
        )
    }

    return ranking

}

export default Rank