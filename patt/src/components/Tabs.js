import React from 'react'; 
import Tab from './Tab'; 

import styled from 'styled-components'; 

const TabsWrapper = styled.div`
    display: flex; 
    flex-direction: row; 
`; 

const Tabs = props => {
    return (
        <TabsWrapper>
            {props.tabs.map((tab) => (
                <div> <Tab 
                tab={tab} 
                selectedTabHandler={props.selectedTabHandler} 
                selectedTab={props.selectedTab}
                /> </div> 
          ))}
          </TabsWrapper>
    )
}

export default Tabs; 