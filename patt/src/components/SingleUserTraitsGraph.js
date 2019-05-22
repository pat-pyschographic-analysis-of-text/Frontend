import React from 'react'
import { VictoryChart, VictoryArea, VictoryTheme, VictoryPolarAxis } from 'victory'

export default function SingleUserTraitsGraph(props) {
    return (
        <>
            <VictoryChart
            polar
            theme={VictoryTheme.material}
            maxDomain={{ y: 1 }}
            padding={{top:100, bottom:100, right:100, left:100}}
             >
                <VictoryArea
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
