import React from 'react';

const Experience = ({items}) => {
    
    return (
    <div>
        <h4>Experience</h4>
        {items.map(exp => {
            return (
                <div key={exp.date} style={{ display: 'flex'}}>
                    <div style={{minWidth:'100px', padding:'1rem'}}>
                        {exp.date}
                    </div>
                    <div>
                        <div style={{fontWeight:'bold'}}>{exp.title}</div>
                        <div>{exp.company}, {exp.location}</div>
                        <ul>
                        {exp.bullets.map(bullet => {
                            return (<li>{bullet}</li>)
                        })}
                        </ul>
                    </div>
                </div>
            );
        })}
    </div>
    );
}

export default Experience
