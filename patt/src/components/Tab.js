import React from "react";

import styled from "styled-components";

const TabStyle = styled.div`
  color: ${props =>
    props.tab === props.selectedTab ? { color: "333" } : "#fff"};

  background-color: ${props => (props.tab === props.selected ? "fff" : "#333")};
  border: ${props =>
    props.tab === props.selectedTab ? "2px solid #333" : "none"};

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
  }
`;

const Tab = props => {
  return (
    <TabStyle
      onClick={() => {
        props.selectedTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabStyle>
  );
};

export default Tab;
