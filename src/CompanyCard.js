import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyCard.css';

function CompanyCard({company}) {

    return (
        <div className='CompanyCardDiv'>
          <Card  className='CompanyCardStyle'>
            <Card.Header className="bg-dark text-white">{company.name}</Card.Header>
            <Card.Body>
              <Card.Text>{company.description}</Card.Text>
              <Link to={`companies/${company.handle}`}>Learn More</Link>
            </Card.Body>
          </Card>
        </div>
    )


}

export default CompanyCard;