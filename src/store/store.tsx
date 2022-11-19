import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsReducer';


const store = configureStore({
    reducer: {
        jobs: jobsReducer
    }
})

export default store;

export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;