import React from 'react'; 
import { connect } from 'react-redux'; 
import DataCard from '../components/DataCard'
import Nav from '../components/Nav'

class SearchPage extends React.Component {
    render() {
        return(
            <div style={{height: '100vh'}}> 
                <Nav />
            <div style={{color: 'red', textAlign: 'center'}}>
                {this.props.error? (<p>{this.props.error}</p>): null}
            </div>
            <DataCard /> 
            </div> 
            )
    }
}

const mapStateToProps = state => ({
    error: state.error
  })

export default connect(mapStateToProps, null)(SearchPage); 