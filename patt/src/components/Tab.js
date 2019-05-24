import React from "react";

import styled from "styled-components";

const TabStyle = styled.div`
  /* color: ${props =>
    props.tab === props.selectedTab ? { color: "333" } : "#fff"}; */

  /* background-color: ${props => (props.tab === props.selectedTab ? "fff" : "#333")};
  border: ${props =>
    props.tab === props.selectedTab ? "2px solid #778899" : "none"}; */

  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    text-decoration: underline;
    color: white; 
  }
`;

const Tab = props => {
  return (
    <TabStyle
        style={props.selectedTab === props.tab ? { backgroundColor: "#745AFF", color: "white", borderRadius: '10px' } : null }
      onClick={() => {
        props.selectedTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabStyle>
  );
};

export default Tab;
