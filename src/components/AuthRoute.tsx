import { Redirect, Route, RouteProps } from 'react-router';
import { getItem } from '../utils/helpers';

export function AuthRoute({ children, ...rest }:RouteProps) {
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