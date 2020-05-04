/*
* @Author: Difei Gu
* @Date:   2020-04-30 19:02:11
* @Last Modified by:   Difei Gu
* @Last Modified time: 2020-04-30 22:22:50
*/
import React from "react";
import dashboard from "./components/Dashboard"
import { Route, Switch, Link } from "react-router-dom"

// import Apollo framework query hook
import { useQuery } from '@apollo/react-hooks';
import "./App.css"

// import our queries previously defined
import { PANEL_QUERY } from "./query"

const DebugPage = (props) => {
    const { loading, error, data } = useQuery(PANEL_QUERY);
    
    // when query starts, loading will be true until the response will back.
    // At this time this will be rendered on screen
    if (loading) return <div>Loading</div>
    
    // if response fail, this will be rendered
    if (error) return <div>Unexpected Error: {error.message}</div>

    //if query succeed, data will be available and render the data
    return(
        <div className="debug-page">
            {data && data.panel &&
                <div className="panel">
                    <p className="url">{data.panel.embed_url}</p>
                    <p className="size">{data.panel.size}</p>
                </div>
            }
        </div>
    )
}


const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={dashboard} />
                <Route exact path="/users/" component={DebugPage} />
            </Switch>
        </div>
    )
}
export default App