import React from "react";
import { DataCard, SettingsButton } from "../components";
import { Link } from "react-router-dom";

class DataCardPage extends React.Component {
  render() {
    return (
      <>
        <SettingsButton /> 
        <DataCard />
        <Link to="/search">
          <button>Search again</button>
        </Link>
      </>
    );
  }
}

export default DataCardPage;
