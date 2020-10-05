import React from "react"
import { Router, Scene } from "react-native-router-flux"

//Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const RouterComp = () => { 
    return (
        <Router>
            <Scene key="root">
                <Scene key="main" hideNavBar={true}>
                    <Scene initial key="home" name="Home" component={Home} />
                    <Scene key="profile" name="Profile" component={Profile} />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComp;