import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import HelloWorld from '../containers/Helloworld';
import Article from '../containers/Article';
import Articleid from '../containers/Articleid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Home extends Component {
  render() {
    return (
    <div>
      <header>
        <nav className='navbar navbar-default'>
          <ul className='nav navbar-nav navbar-right'>
            {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/helloworld'>HelloWorld</Link></li>
            <li><Link to='/article/1'>article</Link></li>  */}
          </ul>
        </nav>
      </header>
    <Switch>
      {
        this.props.location.pathname == "/article" ? <Route exact path='/' component={HelloWorld}/>
        : <Route path="/Article" component={Article}/> 
      }
      <Route path="/" component={HelloWorld}/>
      <Route path="/article/:id" component={Article}/>
    </Switch>
     </div>
    )
  }
}

const h = () => (<h1 className='center-block text-center'>Hello from HomePage!</h1>)


function mapStateToProps(state) {
  return {
    state
  };
}

export default withRouter(connect(mapStateToProps)(Home));




