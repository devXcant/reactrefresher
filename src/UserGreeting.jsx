

const UserGreeting = (props) => {
 
   return (props.isLoggedIn ? <h2>Welcome{props.username}</h2> : <h2> leasee ogin to continue</h2>)
  
}

export default UserGreeting