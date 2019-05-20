import React from 'react'; 
import { UpdateForm } from '../components'; 
import { Link } from 'react-router-dom'; 
 
class SettingsPage extends React.Component {
    render() {
        return(
            <> 
            <UpdateForm /> 
            <Link to="/"><button>Logout</button></Link>
            </> 

            )
    }
}

export default SettingsPage; 