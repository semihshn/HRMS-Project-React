import React,{useState} from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink, useHistory } from 'react-router-dom'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history=useHistory();

    function handleSignOut() {
        setIsAuthenticated(false);
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true);
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item as={NavLink} to="/home" name="home" />
          <Menu.Item as={NavLink} to="/messages" name="messages" />

                    <Menu.Menu position='right'>
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}

