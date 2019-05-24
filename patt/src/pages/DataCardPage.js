import React from "react";
import { DataCard, SettingsButton } from "../components";


class DataCardPage extends React.Component {
  render() {
    return (
      <>
        <SettingsButton /> 
        <DataCard />
      </>
    );
  }
}

export default DataCardPage;
