import { connect } from "react-redux";

import { App } from "./App";

function mapStateToProps({location}) {
    return {
        location        
    };
}

const mapDispatchToProps = {
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
