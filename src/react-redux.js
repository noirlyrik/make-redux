import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        render() {
            const {store} = this.context
            let stateProps = mapStateProps(store.getState())
            return (
                <WrappedComponent {...stateProps}/>
            )
        }

    }
    return Connect

}


