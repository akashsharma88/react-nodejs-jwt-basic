import { Redirect, Route, RouteProps } from 'react-router';
import { getItem } from '../utils/helpers';

export function PrivateRoute({ children, ...rest }:RouteProps) {
    let auth = getItem('user')
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}