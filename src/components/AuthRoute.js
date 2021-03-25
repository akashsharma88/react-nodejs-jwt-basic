import React from 'react'
import { Redirect, Route } from 'react-router';
import AuthService from '../services/AuthService';
import { getItem } from '../utils/helpers';

export function AuthRoute({ children, ...rest }) {
    let auth = getItem('user')
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}