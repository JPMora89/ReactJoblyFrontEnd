import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import JoblyApi from './api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchForm.css';
function SearchForm({updateCompanies}) {
  const INITIAL_STATE = '';
  const [search, setSearch] = useState(INITIAL_STATE);
  const history = useHistory();
  
  const handleChange = (e) => {
    const {value} = e.target;
    setSearch(value);
  }

  const handleSubmit = async (e) => {
    console.log("SUBMITTED");
    e.preventDefault();
    console.debug('handlesubmit for search form has run');
    const req = await JoblyApi.getSearchedCompanies(search);
    if (req.length === 0) {
      alert("No results found");
    }
    updateCompanies(req);
    setSearch(INITIAL_STATE);
    history.push("/companies");
  }


  return (
    <div id="FormDivStyle" >
      <Form id='FormStyle' onSubmit={handleSubmit}>
          <h1 style={{color: 'white'}}>Search</h1>

          <Form.Control
            type="text" 
            placeholder="Enter search term..."
            id="search-input" 
            value={search} 
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>

      </Form>

    </div>
  )
}

export default SearchForm;