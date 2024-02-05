import { configureStore } from '@reduxjs/toolkit'
import cakeSlice from '../feature/cake/cakeSlice'
// const reduxLogger = require('redux-logger')
import userSlice from '../feature/user/userSlice'
import iceCreamSlice from '../feature/icecream/iceCreamSlice'
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeSlice,
        iceCream: iceCreamSlice,
        user: userSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
export type RootStates = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch