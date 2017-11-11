import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import 'styles/study/ChooseMission.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {helloWorldAction} from '../../actions/helloWorld';

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj)
    {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] === 'object') {
        objects = objects.concat(getObjects(obj[i], key, val));
      } else if (i === key && obj[key] === val) {
        objects.push(obj);
      }
    }
    return objects;
  }

class Article extends React.Component{

constructor(props){
    super(props)
}

componentWillMount(){
    this.props.helloWorldAction();
}

render(){
        var id = this.props.location.pathname.replace(/[\D]/g, '');
        var data = getObjects(this.props.starwars, 'uid', id);
        console.log(data)
        return (
                <div>
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{data[0].stationname}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">
                        {data[0].about}
                        </p>
                        <a href={data[0].twitter} className="card-link">Website</a>
                        <a href={data[0].website} className="card-link">twitter</a>
                    </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(Article);