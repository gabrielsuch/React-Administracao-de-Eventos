import {Switch, Route} from "react-router-dom"

import Home from "../components/Home"
import Graduation from "../components/Graduation"
import Wedding from "../components/Wedding"
import Confraternization from "../components/Confraternization"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/graduation">
                <Graduation />
            </Route>
            <Route path="/wedding">
                <Wedding />
            </Route>
            <Route path="/confraternization">
                <Confraternization />
            </Route>
        </Switch>
    )
}

export default Routes