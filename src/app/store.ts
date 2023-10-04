import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'
import countReducer from './count'
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  count: countReducer
})
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']