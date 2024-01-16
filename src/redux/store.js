import { configureStore } from "@reduxjs/toolkit"
import XodimlarReducer from '../redux/XodimlarReducer'

export default configureStore({
    reducer:  XodimlarReducer 
})