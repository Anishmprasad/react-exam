import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router'
// import 'styles/study/ChooseMission.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {helloWorldAction} from '../../actions/helloWorld';


class helloWorld extends React.Component{

constructor(props){
    super(props)
}

componentDidMount(){
    this.props.helloWorldAction();
}

resultpointer(id){
    this.props.history.push("/article/"+id)
}

render(){
    var styles = {
        marginBottom : "20px",
        cursor : 'pointer'
    };
    return(
        <div>
            <h1 className={"text-center"}>Article</h1>
           <div className="container">
                {
                this.props.starwars.map((post,i) =>
                    <a className="card" style={styles} onClick={() => this.resultpointer(post.uid)}>
                    <img className="card-img-top" src="http://via.placeholder.com/318x100" alt="Card image cap"/>
                    <div className="card-body">
                    <h4 className="animated fadeInLeft delay bubble float card-title" dangerouslySetInnerHTML={{__html: post.stationname}}></h4>
                    <p className="card-text">
                     {post.about}
                    </p>
                    <a href="#!" className="btn btn-primary">click</a>
                    </div>
                    </a>

                    )
                }
            </div>
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
function mapDispatchToProps(dispatch){
  return bindActionCreators({helloWorldAction},dispatch);
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(helloWorld));