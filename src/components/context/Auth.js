import React, { useContext } from "react";
import AuthContext from "./auth-context";
  
const Auth = () => {
  // Now all the data stored in the context can 
  // be accessed with the auth variable
  const auth = useContext(AuthContext);
  console.log(auth.status);
  return (
    <div className="context">
      <h3>Login Authentication with useContext</h3>
      {auth.status ? 
<p>Login Success</p>
 : 
<p>Please Login To Complete Your Action</p>
}
  
      <button onClick={auth.login}>Click To Login</button>
    </div>
  );
};
export default Auth;