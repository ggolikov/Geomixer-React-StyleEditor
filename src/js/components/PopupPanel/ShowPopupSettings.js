import React, { Component } from 'react';
import styleEditor from '../../StyleEditor';
import _ from 'lodash/core';

class ShowPopupSettings extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        let { layer, param, style, index } = this.props,
            extendingStyle = {};

        if (typeof style.BalloonEnable === 'undefined')
        {
            extendingStyle.BalloonEnable = true;
            extendingStyle.DisableBalloonOnClick = false;
            extendingStyle.DisableBalloonOnMouseMove = true;
        } else {
            if (typeof style.DisableBalloonOnClick === 'undefined') {
                extendingStyle.DisableBalloonOnClick = false;
            }

            if (typeof style.DisableBalloonOnMouseMove === 'undefined') {
                extendingStyle.DisableBalloonOnMouseMove = false;
            }
        }

        if (e.target.value === 'DisableBalloonOnClick') {
            extendingStyle.DisableBalloonOnClick = false;
            extendingStyle.DisableBalloonOnMouseMove = true;
        } else {
            extendingStyle.DisableBalloonOnClick = true;
            extendingStyle.DisableBalloonOnMouseMove = false;
        }

        style = _.extend(style, extendingStyle);

        styleEditor.setStyle(layer, style, index);
    }

    render() {
        let { style } = this.props;

        return (
            <div>
                <label>
                    <input
                        type="radio"
                        name="contact"
                        value="DisableBalloonOnClick"
                        defaultChecked={!style.DisableBalloonOnClick}
                        onClick={this.handleClick}
                    />
                        {window._gtxt('при клике')}
                    </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="contact"
                        value="DisableBalloonOnMouseMove"
                        defaultChecked={!style.DisableBalloonOnMouseMove}
                        onClick={this.handleClick}
                    />
                        {window._gtxt('при наведении')}
                </label>
            </div>
        );
    }
}

export { ShowPopupSettings };
