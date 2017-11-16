import React, { Component } from 'react';
import { Header } from './Header';
import { Input } from './Input';

class PopupPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div>
                Popup panel
            </div>
        );
    }
}
export { PopupPanel };
