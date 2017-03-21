exports.loginAction = (username) => {
  console.log('loginAction',username);
  return(
    type:'LOG_IN',
    username
  )
}
