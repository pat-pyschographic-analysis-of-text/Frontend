import React from 'react'; 
import { SearchForm, SettingsButton, ExploreProfiles } from '../components'; 
 
class SearchPage extends React.Component {
    render() {
        return(
            <> 
            <SettingsButton /> 
            <SearchForm /> 
            <ExploreProfiles />
            </> 
            )
    }
}

export default SearchPage; 