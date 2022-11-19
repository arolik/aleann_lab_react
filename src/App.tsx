import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Job from './components/Job';
import JobDetails from './components/Jobdetails';
import ListJobs from './components/ListJobs';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchJobs } from './store/jobsReducer';

function App() {

  const dispatch = useAppDispatch();
  const jobs = useAppSelector(state => state.jobs.jobs);
  
  useEffect(() => {
    dispatch(fetchJobs());
  }, [])


  return (
      
        <Routes>
          <Route path='aleann_lab_react/' element={<ListJobs list={jobs}  />} />
          <Route path='/aleann_lab_react/details' element={<JobDetails />} /> 
        </Routes>
        
  );
}

export default App;
