import { Component } from "react";
import './main.css';

import Container from "./container";
import LeftSide from "./leftSideNavigation"

class MainComponent extends Component {
    render() {
        return (
            <div className='wrap'>
                <LeftSide />
                <Container />
            </div>
        )
    }
}

export default MainComponent;