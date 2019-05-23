import React from 'react'
import { VictoryChart, VictoryArea, VictoryTheme, VictoryPolarAxis } from 'victory'

export default function SingleUserTraitsGraph(props) {
    const obj = props.data
    const objOfArr = Object.keys(obj).map(key => {
        return {
            key: (key.charAt(0).toUpperCase() + key.slice(1).replace(/[^a-zA-Z ]/g, " ")),
            value: obj[key]
        }
    })
    console.log(objOfArr)
    return (
        <>
            <VictoryChart
            polar
            theme={VictoryTheme.material}
            maxDomain={{ y: 1 }}
            padding={{top:100, bottom:100, right:100, left:100}}
             >
                <VictoryArea
                data={objOfArr}
                x='key'
                y="value"
                animate
                 />
                 <VictoryPolarAxis 
                 />
            </VictoryChart>
        </>
    )
}
