import React, { Component } from 'react';
import { Header } from '../common/Header';
import { Input } from '../common/Input';

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
