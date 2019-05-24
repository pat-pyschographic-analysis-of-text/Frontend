import React from 'react'
import { VictoryChart, VictoryLine } from 'victory'

export default function TimeLineGraph(props) {
    console.log(props.props[0])
    return (
        <VictoryChart>
            <VictoryLine
            />
        </VictoryChart>
    )
}