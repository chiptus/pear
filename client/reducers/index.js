import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authentication from './authentication'
import projects from './projects'
import form from './form'
import mail from './mail'
/*
 * Each reducer get's a part of state corresponding to the keys listed here.
 */
export default combineReducers({
  authentication,
  projects,
  formReducer,
  form,
  mail
})
