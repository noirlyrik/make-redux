import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateProps, mapDispatchProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor() {
            super()
            this.state = {allProps: {}}
        }

        componentWillMount() {
            const {store} = this.context
            this._updateProps()
            store.subscribe(()=> this._updateProps())
        }
    
        _updateProps() {
            const {store} = this.context
            let stateProps = mapStateProps ? mapStateProps(store.getState(), this.props) : {}
            let dispatchProps = mapDispatchProps ? mapDispatchProps(store.dispatch, this.props) : {}
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
            }})
        }

        render() {
            return (
                <WrappedComponent {...this.state.allProps}/>
            )
        }

    }
    return Connect

}


export default class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    static propTypes = {      
        store: PropTypes.object,
        children: PropTypes.any
    }

    getChildContext() {
        return { store: this.props.store }
    }

    render() {
        return <div>{this.props.children}</div>
    }
}


