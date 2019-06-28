import React from 'react'
// GUI that renders additional info when a user hovers 
import Tooltip from 'react-png-tooltip'

export default function RawScoreLegend(props) {

  // Why both interger and integer here?? 
    const personalityScoreProvider = interger => {
      const integer = interger
      if (interger < 1 && interger > .75) {
        return "High likelihood to have this trait"
      } else if (integer <= .75 && integer > .5) {
        return "Moderately likely to have this trait"
      } else if ( integer < .5) {
        return "Unlikely to have this trait"
      }
    }
    const percentileProviderLogic = integer => {
        const percentile = (integer * 100).toFixed(2)
        return percentile
    }
    const legendTitleCapitalizer = legendKey => {
      const legendTitle = (legendKey.charAt(0).toUpperCase() + legendKey.slice(1).replace(/[^a-zA-Z ]/g, " "))
      return legendTitle
    }
    
    const obj = props.data
    const objOfArr = Object.keys(obj).map(key => {
        return {
            key: (key.charAt(0).toUpperCase() + key.slice(1).replace(/[^a-zA-Z ]/g, " ")),
            value: obj[key]
        }
    })
    
    const legend = objOfArr.map((data, i) => {
          return <p style={{display: 'flex', flexDirection: 'column', zIndex: '5'}}key={i}>{legendTitleCapitalizer(data.key)}: %{percentileProviderLogic(data.value)}{<Tooltip shouldDisableHover key={i}>{personalityScoreProvider(data.value)}</Tooltip>}</p>
        })
    return(
        <>{legend}</>
    )
}