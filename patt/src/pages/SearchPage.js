import React from 'react'; 
 
import { SearchForm, SettingsButton } from '../components'; 
import DataCard from '../components/DataCard'

class SearchPage extends React.Component {
    render() {
        return(
            <> 
            <SettingsButton /> 
            <SearchForm /> 
            <DataCard /> 
            </> 
            )
    }
}

export default SearchPage; 