import React from 'react';
import {Route, Switch} from "react-router-dom";
import * as shortid from 'shortid';
import {ROUTES} from "./Routes";
import {Container} from "semantic-ui-react";
import {MAX_HEIGHT} from "./Style";

class App extends React.Component {
    render() {
        return (
            <Container id={'App'} fluid style={MAX_HEIGHT}>
                <Switch>
                    {ROUTES.map((route) => <Route key={shortid.generate()} {...route} />)}
                </Switch>
            </Container>
        );
    }
}

export default App;
//export default withRouter(App);
