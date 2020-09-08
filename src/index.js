import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'

class Index extends Component {


  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

// function createStore(reducer) {
//   let state = null
//   const listeners = []  
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) => listener())
//   }
//   dispatch({})
//   return { getState, dispatch, subscribe }
// }

// function stateChanger (state, action) {
//   if (!state) {
//     return {
//       title: {
//         text: 'react',
//         color: 'red'
//       },
//       content: {
//         text: 'reactjs',
//         color: 'red'
//       }
//     }
//   }
//   switch(action.type){
//     case 'UPDATE_TITLE_TEXT':
//       return {
//         ...state,
//         title: { 
//           ...state.title,
//           text: action.text }
//       }
//       case 'UPDATE_TITLE_COLOR':
//         return {
//           ...state,
//           title: { 
//             ...state.title,
//             color: action.color }
//         }
//       default: return state
//   }
// }

// function renderApp(state, oldState={}){
//   if (state === oldState) return 
//   console.log('render app')
//   renderTitle(state.title, oldState.title)
//   renderContent(state.content, oldState.content)
// }

// function renderTitle(title, oldTitle={}) {
//   if (title === oldTitle) return
//   console.log('render title')
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = title.text
//   titleDOM.style.color = title.color
// }

// function renderContent(content, oldContent={}) {
//   if (content === oldContent) return
//   console.log('render content')
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = content.text
//   contentDOM.style.color = content.color
// }

// const store = createStore(stateChanger)
// let oldState = store.getState()
// store.subscribe(()=> {
//   const newState = store.getState()
//   renderApp(newState, oldState)
//   oldState = newState
// }) 

// renderApp(store.getState())
// store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'reactjsssss'})
// store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)