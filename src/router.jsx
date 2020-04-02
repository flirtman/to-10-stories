import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Top10StoriesPage from './pages/top-10-stories';
import StoryPage from './pages/story';
import Navigation from './components/navigation';

export default function App() {
    return (
        <div>
            <Navigation/>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Top10StoriesPage />
                    </Route>
                    <Route path="/top-10-stories">
                        <Top10StoriesPage />
                    </Route>
                    <Route path="/story" exact>
                        <h1>Error: 404</h1>
                        <p>The page is not exist!</p>
                    </Route>
                    <Route path="/story/:id" component={StoryPage} />
                </Switch>
            </Router>
        </div>
    );
}
