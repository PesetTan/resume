import React from 'react'
import Rank from './rank';

const Skills = ({item}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250',
            padding: '1rem'
        }}>
            <h4>{item.type}</h4>
            {item.items.map((skill) => {
                return (
                    <div style={{display: 'flex', justifyContent:'space-between'}}key={skill.name}>
                        <span style={{width:'100px'}}>{skill.name}</span>
                        <div style={{width:'100px'}}><Rank value={skill.value} /></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills