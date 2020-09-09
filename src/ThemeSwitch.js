import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class ThemeSwitch extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <div>
                <button 
                style={{color: this.props.themeColor}}
                onClick={this.handleSwitchColor.bind(this, 'red')}
                >red</button>
                <button 
                style={{color: this.props.themeColor}}
                onClick={this.handleSwitchColor.bind(this, 'blue')}
                >blue</button>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({
                type: 'CHANGE_THEMECOLOR',
                themeColor: color
            })
        }
    }
}

ThemeSwitch = connect(mapStateProps, mapDispatchProps)(ThemeSwitch)

export default ThemeSwitch