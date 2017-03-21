import {combineReducers} from 'redux'
import loginReducer from './loginReducer'

module.exports = combineReducers({
  logIn: loginReducer
})
