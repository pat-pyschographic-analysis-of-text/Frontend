import React from 'react'; 
import Tab from './Tab'; 

import styled from 'styled-components'; 

const TabsWrapper = styled.div`
    display: flex; 
    flex-direction: row; 
    max-width: 500px; 
    width: 100%; 
    margin: 0 auto; 
    text-align: center; 
    justify-content: center; 
`; 

const Tabs = props => {
    return (
        <TabsWrapper>
            {props.tabs.map((tab, i) => (
                <div> <Tab 
                key={i}
                tab={tab} 
                selectedTabHandler={props.selectedTabHandler} 
                selectedTab={props.selectedTab}
                /> </div> 
          ))}
          </TabsWrapper>
    )
}

export default Tabs; 