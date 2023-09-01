import { configureStore } from '@reduxjs/toolkit'
import { TicketReducer } from '../reducers'

export default configureStore({
    reducer: {
        ticket: TicketReducer
    }
})
