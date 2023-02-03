import React, { Component } from 'react';

import '@aws-amplify/ui-react/styles.css';

import { API, Auth, Amplify } from 'aws-amplify';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';


console.log();




function App2({ signOut, user }) {

  
  
  return (
    <div className="App2">

                


      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App2);

