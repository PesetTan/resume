
import React from 'react'

const Education = ({items}) => {
    return (
        <div>
            <h4>Education</h4>
            <ul>
                
                {items.map((edu) => {
                    return (
                        <li key={edu.degree}>
                            <div>
                                <div>
                                    <span>{edu.degree}, </span> 
                                    <span>{edu.school}</span>
                                </div>
                                <div>{edu.address}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Education