import { browserHistory } from 'react-router'
import { Route, Redirect } from 'react-router'
import {withRouter} from "react-router-dom";

export const HELLOWORLD = 'HELLOWORLD';

import {API_URL} from '../constants/constants';
import {RADIO} from '../constants/constants'

import axios from 'axios';

import React from 'react';
import PropTypes from 'prop-types';


export function helloWorldAction(){
     return function (dispatch) {
        return axios.get(RADIO)
          .then(response => {
            dispatch(helloWorld(response.data))
            return response.data
        }).catch(function (error) {
            // console.log(error);
            return error
        });
    }

}

export function helloWorld(data) {
  return {
    type: HELLOWORLD,
    data
  };
}

