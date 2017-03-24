var defaultState = {
  user_id:undefined
}
module.exports = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        user:action.username
      }
    default:
      return state
  }
}
