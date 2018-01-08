import React, { Component } from 'react';
import $ from 'jquery';

class ShowPopupSettings extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let style = this.state.style,
            newSyle = {};

        if (typeof style.BalloonEnable === 'undefined')
        {
            newSyle.BalloonEnable = true;
            newSyle.DisableBalloonOnClick = false;
            newSyle.DisableBalloonOnMouseMove = true;
        } else {
            if (typeof style.DisableBalloonOnClick === 'undefined') {
                newSyle.DisableBalloonOnClick = false;
            }

            if (typeof style.DisableBalloonOnMouseMove === 'undefined') {
                newSyle.DisableBalloonOnMouseMove = false;
            }
        }

        if (e.target.value === 'DisableBalloonOnClick') {
            newSyle.DisableBalloonOnClick = false;
            newSyle.DisableBalloonOnMouseMove = true;
        } else {
            newSyle.DisableBalloonOnClick = true;
            newSyle.DisableBalloonOnMouseMove = false;
        }

        const extendedStyle = $.extend(true, this.props.style, newSyle);

        this.state.layer.setStyle(extendedStyle, this.props.index);
    }

    render() {
        let style = this.state.style;

        return (
            <div>
                <label><input type="radio" name="contact" value="DisableBalloonOnClick" defaultChecked={!style.DisableBalloonOnClick} onClick={this.handleClick}/> {window._gtxt('при клике')} </label> <br />
                <label><input type="radio" name="contact" value="DisableBalloonOnMouseMove" defaultChecked={!style.DisableBalloonOnMouseMove} onClick={this.handleClick}/> {window._gtxt('при наведении')} </label>
            </div>
        );
    }
}

export { ShowPopupSettings };
