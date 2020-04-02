import React, {Component} from "react";
import Axios from 'axios';


import './styles.scss';


class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            story: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({id: id});

        const apiUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty';
        Axios.get(apiUrl)
            .then(res => {
                const storyData = res.data;
                this.setState({ story: storyData });
            })

    }
    render() {
        const story = this.state.story;
        return (
            <div>
                <h1>sdsdsd</h1>
                { story && (
                    <div>
                        <h1>{ story.title }</h1>
                    </div>
                )}
            </div>
        )
    }
}

export default Story;
