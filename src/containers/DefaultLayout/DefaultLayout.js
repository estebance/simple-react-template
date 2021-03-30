import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import routes from '../../routes';
import logo from '../../logo.svg';
import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div className="App">
            <div className="app-body">
                <AppHeader/>
                <main className="main">
                    <Container>
                        <Switch>
                          {
                            routes.map((route, idx) => {
                                return route.component ? (
                                  <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                      <route.component {...props} />
                                    )} />
                                ) : (null);
                            })
                          }
                        </Switch>
                    </Container>
                </main>
                <AppFooter/>
            </div>
        </div>
    );
  };

};

export default DefaultLayout;
