import {applyMiddleware, compose, createStore} from 'redux'
import devTools from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import reducer from '../reducers'

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'runningtimeapp',
      realtime: true,
    }),
  )

  const store = createStore(reducer, enhancer)
  persistStore(store, onCompletion)

  return store
}
