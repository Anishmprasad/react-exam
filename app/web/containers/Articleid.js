import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import 'styles/study/ChooseMission.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {helloWorldAction} from '../../actions/helloWorld';


class Articleid extends React.Component{

constructor(props){
    super(props)
    debugger;
}

render(){
        debugger;
        let jobDetails = this.props.starwars.filter( t => t.id == this.props.params.id)[0];
        console.log(jobDetails)
        return (
                <div>
                    <img src={jobDetails.img} />
                    <p className="trabalho_titulo">{jobDetails.title}</p>
                    <p className="trabalho_desc">{jobDetails.descricao}</p>
                </div> 
            )

}
}
function mapStateToProps(state) {
  console.log('starwars->',state)
  return {
      starwars:state.helloWorld
  };
}
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({helloWorldAction},dispatch);
// }


export default connect(mapStateToProps)(Articleid);