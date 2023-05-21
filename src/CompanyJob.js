import React, {useEffect, useState, useContext} from 'react';
import userContext from './userContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyJob.css'

function CompanyJob({job, company}) {
  const {appliedIds, checkApplied, applyToJobId} = useContext(userContext);
  const [appliedState, setAppliedState] = useState(false);

  useEffect(() => {
    setAppliedState(checkApplied(job.id))
  }, [checkApplied, appliedIds]);
  
  // const handleApply = async () => {
  //   if (checkApplied(job.id)) {
  //     return;
  //   } else {
  //     applyToJobId(job.id);
  //     setAppliedState(true);
  //   }
  // }
  const handleApply = async () => {
    if (appliedState) {
      return;
    } else {
      applyToJobId(job.id);
      setAppliedState(true);
    }
  };

  return (
    <div id='CompanyJobCardDiv' >
      <Card id='CompanyJobCard'>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>Salary: ${job.salary}</Card.Text>
          {/* <Card.Text>Equity: {job.equity}</Card.Text> */}

{/* <Card.Text>Salary: ${job.salary.toLocaleString() || job.salary}</Card.Text> */}
<Card.Text>Equity: {Number(job.equity).toLocaleString(undefined, {
  style: "percent",
  minimumFractionDigits: 2,
})}</Card.Text>
          <Button onClick={handleApply}>{appliedState ? "Applied": "Apply"}</Button>
        </Card.Body>
      </Card>
    </div>)
}

export default CompanyJob;