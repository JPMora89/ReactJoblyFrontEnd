import React, {useContext, useEffect, useState} from 'react';
import userContext from './userContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobCard.css';

function JobCard({job}) {
  const {appliedIds, checkApplied, applyToJobId} = useContext(userContext);
  const [appliedState, setAppliedState] = useState(false);
  
  useEffect(() => {
    setAppliedState(checkApplied(job.id))
  }, [appliedIds]);

  const handleApply = async () => {
    if (checkApplied(job.id)) {
      return;
    } else {
      applyToJobId(job.id);
      setAppliedState(true);
    }
  }


  return (
    <div id='JobCardDivStyle'>
      <Card id='JobCardStyle' >
        <Card.Header className="bg-dark text-white">{job.title}</Card.Header>
        <Card.Body>
        <Card.Text>Company: {job.companyHandle}</Card.Text>
   
        <Card.Text>Salary: ${job.salary}</Card.Text>
        
        <Card.Text>Equity: {Number(job.equity).toLocaleString(undefined, {
          style: "percent",
          minimumFractionDigits: 2, })}</Card.Text>
          <Button onClick={handleApply}>{appliedState ? "Applied": "Apply"}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;