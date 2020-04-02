import React, { Component } from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import TEEMAlogo1x from '../../assets/images/TEEMAlogo1x.png';

export default class Navigation extends Component {
    render () {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img src={TEEMAlogo1x} alt="" width={'100px'}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/top-10-stories">Top 10 Stories</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}