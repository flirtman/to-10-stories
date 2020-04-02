import React, {Component} from "react";
import Axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import UserImg from '../../assets/images/user.png';

import './styles.scss';
import {TimeConverter} from "../../components/timeConverter";


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

        let topComments = [];
        if(this.state.topComments[0]) {
            topComments = this.state.topComments
        }

        return (
            <div id={'story'}>
                <br/>
                { story && (
                    <Container>
                        <h1>{ story.title }</h1>
                        <div className={'comments-wrapper'}>

                            <div className={'comments-wrapper-title'}>Top 20 Comments</div>
                            <div className={'comments-wrapper-body'}>
                                <ul>
                                    {
                                        this.state.topComments.map( (value, key) => (

                                            <li key={key}>
                                                <img src={UserImg} alt={'user icon'} className={'user-icon'}/>
                                                <Row>
                                                    <Col><strong>Author: {value.by}</strong></Col>
                                                    <Col className={'text-right'}>Posted on: { TimeConverter(value.time) }</Col>
                                                </Row>
                                                { ReactHtmlParser(value.text) }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </Container>
                )}
            </div>
        )
    }
}

export default Story;
