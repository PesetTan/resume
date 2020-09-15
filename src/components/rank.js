
import React from 'react'

const Rank = ({value}) => {
    let ranking = [];

    for (let i=1; i<=5; i++) {
        ranking.push (
            <span 
                key={i} 
                style={{
                    height:'1rem',
                    width:'1rem',
                    backgroundColor:(i > value) ? 'lightgrey' : 'rgb(100,0,255)',
                    borderRadius:'50%',
                    display: 'inline-block',
                    border:(i > value) ? 'lightgrey' : 'rgb(100,0,255)',
                    borderStyle:'solid',
                    margin: '0 0.05rem'
            }}></span>
        )
    }

    return ranking

}

export default Rank