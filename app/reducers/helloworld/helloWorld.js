import  {HELLOWORLD}  from '../../actions/helloWorld';

const initialState = [];


export default function helloworld(state = initialState, action) {
  switch (action.type) {
      case HELLOWORLD:
        return action.data;
      default:
        return state;
  }
};