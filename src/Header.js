import React, { Component } from 'react'
import PropTypes from 'prop-types'
import connect from './react-redux'

class Header extends Component {
    static propTypes = {
        store: PropTypes.object
    }

    constructor() {
        super()
        this.state = {themeColor: ''}
    }

    // componentWillMount() {
    //     const {store} = this.context
    //     this._updateThemeColor()
    //     store.subscribe(()=> this._updateThemeColor())
    // }

    // _updateThemeColor() {
    //     const {store} = this.context
    //     const state = store.getState()
    //     this.setState({themeColor: state.themeColor})
    // }



    

    render() {
        return (
            <div>
                <h1 style={{color: this.props.themeColor}}>reactjs</h1>
            </div>
        )
    }
}
const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Header = connect(mapStateProps)(Header)

export default Header