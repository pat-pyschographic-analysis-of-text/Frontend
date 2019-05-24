import React from 'react'; 
import { connect } from 'react-redux'; 
import { SearchForm, SettingsButton } from '../components'; 
import DataCard from '../components/DataCard'

class SearchPage extends React.Component {
    render() {
        return(
            <> 
            <SettingsButton /> 
            <SearchForm /> 
            <div style={{color: 'red', textAlign: 'center'}}>
                {this.props.error? (<p>{this.props.error}</p>): null}
            </div>
            <DataCard /> 
            </> 
            )
    }
}

const mapStateToProps = state => ({
    error: state.error
  })

export default connect(mapStateToProps, null)(SearchPage); 