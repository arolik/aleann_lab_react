import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { JobI } from "../assets/interfaces";
import { ROOT_PATH, TOKEN } from "../assets/path";

interface JobsState {
    jobs: Array<JobI>,
    jobId: string
}

const initialState: JobsState = {
    jobs: [],
    jobId: '',
}

export const fetchJobs = createAsyncThunk<Array<JobI>, undefined, {rejectValue: string}> (
    'jobs/fetchJobs',
    async function(_, {rejectWithValue}) {
        const response = await fetch(`${ROOT_PATH}?access_token=${TOKEN}`);
        if(!response.ok){
            return rejectWithValue('server error');
        }
        const data = await response.json();
        return data;
    }
);

const jobsReducer = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setId (state, action: PayloadAction<string>) {
            state.jobId = action.payload;
        }, 
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchJobs.fulfilled, (state, action) => {
            state.jobs = action.payload
        }) 
    }
})

export const { setId } = jobsReducer.actions;

export default jobsReducer.reducer;

