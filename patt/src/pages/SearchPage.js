import React from 'react'; 
import { SearchForm, SettingsButton } from '../components'; 
import DataCardPage from './DataCardPage'

class SearchPage extends React.Component {
    render() {
        return(
            <> 
            <SettingsButton /> 
            <SearchForm /> 
            <DataCardPage /> 
            </> 

            )
    }
}

export default SearchPage; 