import React, {useContext, useEffect} from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Amplify from 'aws-amplify';
import { Hub, Auth } from 'aws-amplify';

// amplify aws config
/*
Amplify.configure({
  Auth: {
      region: process.env.REACT_APP_AUTH_REGION,
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT,
      oauth: {
          redirectSignIn: process.env.REACT_APP_OAUTH_REDIRECT_SIGN_IN,
          redirectSignOut: process.env.REACT_APP_OAUTH_REDIRECT_SIGN_OUT,
          domain: process.env.REACT_APP_OAUTH_DOMAIN,
          scope: ["openid","email"],
          responseType: 'token'
      }
  }
});
*/

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));
const AuthLayout = React.lazy(() => import('./containers/AuthLayout/AuthLayout'));

const App = (props) => {


    Auth.currentSession().then((sessionData) => {
        console.log('SESSION DATA TOKEN', sessionData);
        const token = sessionData.getAccessToken().getJwtToken();
        sessionStorage.setItem('token', token);
    }).catch(() =>{
        console.log('could not auth user');
    });

    let container = (
            <BrowserRouter>
                <React.Suspense fallback={<h1>Loading profile...</h1>}>
                <Switch>
                    <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
                </Switch>
            </React.Suspense>
            </BrowserRouter>
    );
    return container;
};

export default App;
