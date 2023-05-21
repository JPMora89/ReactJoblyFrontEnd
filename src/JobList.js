import React, {useEffect, useState} from 'react';
import JoblyApi from './api';
import JobCard from './JobCard';
import JobPagination from './JobPagination';
import './JobList.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    const getJobs = async () => {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);


    // Calculate the index of the last job on the current page
    const lastIndex = currentPage * jobsPerPage;

    // Calculate the index of the first job on the current page
    const firstIndex = lastIndex - jobsPerPage;
  
    // Get the jobs for the current page
    const currentJobs = jobs.slice(firstIndex, lastIndex);
  
    // Function to handle page changes
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    return (
    //   <>
    //     {jobs.map(job => (<JobCard job={job} key={job.id}/>)
    //     )}
    //   </>
    // )
    <>
    <div>
      {currentJobs.map((job) => (
        <div key={job.id}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
        <div id="JobListPagination">
    < JobPagination 
      currentPage={currentPage}
      itemsPerPage={jobsPerPage}
      totalItems={jobs.length}
      onPageChange={handlePageChange}
    />
</div>
  </>
);
  }
  
  export default Jobs;