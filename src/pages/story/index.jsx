import React, {Component} from "react";
import Axios from 'axios';
import {Container} from 'react-bootstrap';

import './styles.scss';


class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            story: [],
            topComments: []
        };

        this.getComments = this.getComments.bind(this);
    }
    componentDidMount() {
        this._isMounted = true;
        const id = this.props.match.params.id;
        this.setState({id: id});

        const apiUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty';
        Axios.get(apiUrl)
            .then(res => {
                const storyData = res.data;
                this.setState({ story: storyData });

                if(this._isMounted ) {
                    for(let i = 0; i < 20; i ++ ) {
                        this.getComments (storyData.kids[i]);
                    }
                }
            })

    }
    getComments = async (storyId) => {

        const arr = this.state.topComments;

        await Axios.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json')
            .then(res => {
                arr.push(res.data);
            });
        this.setState({topComments: arr});
        console.log(arr)

    };
    render() {
        const story = this.state.story;
        return (
            <div id={'story'}>
                <br/>
                { story && (
                    <Container>
                        <h1>{ story.title }</h1>
                        <ul>
                            {
                                this.state.topComments.map( (value, key) => (
                                    <li key={key}>
                                        { value.text }
                                    </li>
                                ))
                            }
                        </ul>
                    </Container>
                )}
            </div>
        )
    }
}

export default Story;
