import React from 'react'; 
import Tab from './Tab'; 

const Tabs = props => {
    return (
        <div>
            {props.tabs.map((tab) => (
                <div> <Tab 
                tab={tab} 
                selectedTabHandler={props.selectedTabHandler} 
                selectedTab={props.selectedTab}
                /> </div> 
          ))}
          </div>
    )
}

export default Tabs; 