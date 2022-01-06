import {Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// A wrapper for <Route> that redirects to the login
export function PrivateRoute({children, ...rest}){
    let auth = useAuth();
    return(
        <Route 
            {...rest}
            render={({location}) =>
                auth.user ? 
                    ( children )
                          : 
                    (<Redirect to = {{ path:'/login', state: {fron: location}, }}
             />)

            }
        />
    );
}
