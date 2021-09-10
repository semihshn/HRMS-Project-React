import React,{useEffect, useState} from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthenticate } from '../../store/actions/authenticateActions'

export default function Navi() {

    const isAuthenticate = useSelector(state => state.isAuthenticate)
    const dispatch = useDispatch()

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history=useHistory();

    useEffect(() => {
        isAuthenticate?setIsAuthenticated(true):setIsAuthenticated(false);
      },[isAuthenticate]);
    

    function handleSignOut() {
        dispatch(setAuthenticate(false))
        history.push("/")
    }

    function handleSignIn() {
        dispatch(setAuthenticate(true))
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item as={NavLink} to="/" name="home" />
          <Menu.Item as={NavLink} to="/messages" name="messages" />

                    <Menu.Menu position='right'>
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}

