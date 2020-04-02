import React, { Component } from 'react';
import Axios from 'axios';

import {Card, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

import { TimeConverter } from '../../components/timeConverter';

import './styles.scss';

class Top10Stories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topStoriesIds : [],
            topStories: []
        };

        this.getStoriesContent = this.getStoriesContent.bind(this);
    }
    componentDidMount = async () => {
        this._isMounted = true;
        const apiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
        const t = this;
        await Axios.get(apiUrl)
            .then(res => {
                const topStoriesIds = res.data.slice(0, 10);
                this.setState({topStoriesIds: topStoriesIds});

                this._isMounted && topStoriesIds.forEach( value => {
                    t.getStoriesContent (value);
                });

            })
    };
    getStoriesContent = async (storyId) => {

        const arr = this.state.topStories;

         await Axios.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json')
            .then(res => {
                arr.push(res.data);
            });
        this.setState({topStories: arr});

    };
    render () {
        return (
            <Container id={'top10stories'}>
                <br/>
                <h1>Top 10 Stories</h1>
                {
                    this.state.topStories.map( (value, key) => (
                        <Card style={{ width: '18rem' }} key={key}>
                            <Card.Body>
                                <Card.Title>{ value.title }</Card.Title>
                                <Card.Text>
                                    <span>Author: { value.by }</span>
                                    <span>ID: { value.id }</span>
                                    <span>Score: { value.score }</span>
                                    <span>Comments : { value.descendants }</span>
                                    <span>Published: { TimeConverter(value.time) }</span>
                                    <span>URL: <a href={ value.url } target={'_blank'} rel="noopener noreferrer">http://....</a></span>
                                </Card.Text>
                                <Link variant="primary" className={"myButton"} to={`story/${value.id}`} >Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Container>
        )
    }
}
//
export default Top10Stories;