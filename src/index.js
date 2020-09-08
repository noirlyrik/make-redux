let appState ={
  title: {
    text:  'react',
    color: 'blue'
  }, 
  content:{
    text: 'js',
    color: 'red'
  }
}

function createStore(state, reducer) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener)=>listener())
  }
  return { getState, dispatch, subscribe }
}

function stateChanger(state, action) {
  switch (action.type){
    case 'UPDATE_TITLE_TEXT':
      return {        
           ...state,
          title: {
            ...state.title,
            text: action.text
          }          
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: { ...state.title, color: action.color}
      }
    default:
      return state
  }
}

function renderApp(appState, oldState={}) {
  if(appState === oldState) return 
  console.log('render app...')
  renderTitle(appState.title, oldState.title)
  renderContent(appState.content, oldState.content)
}

function renderTitle(title, oldTitle={}){
  if(title === oldTitle) return 
  console.log('render title...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent(content, oldContent={}){
  if(content === oldContent) return 
  console.log('render content...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

const store = createStore(appState, stateChanger)
let oldState = store.getState()
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState
})

renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'reactjs小书'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'black'})