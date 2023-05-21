// import React, {useEffect, useState} from 'react';
// import SearchForm from './SearchForm';
// import JoblyApi from './api';
// import CompanyCard from './CompanyCard';

// function CompanyList() {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const getCompanies = async () => {
//       const req = await JoblyApi.getAllCompanies();
//       setCompanies(req);
//     }
//     getCompanies();
//   }, []);

//   const updateCompanies = (filteredCompanies) => {
//     setCompanies([...filteredCompanies]);
//   }

//   return (
//     <>
//       <SearchForm updateCompanies={updateCompanies}/>
//       <div>
//         {companies.map(company => (
//           <div>
//             <CompanyCard company={company} />
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default CompanyList;

import React, {useEffect, useState} from 'react';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import Pagination from './Pagination';
import './CompanyList.css';
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const getCompanies = async () => {
      const req = await JoblyApi.getAllCompanies();
      setCompanies(req);
    }
    getCompanies();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = companies.slice(indexOfFirstItem, indexOfLastItem);


  const updateCompanies = (filteredCompanies) => {
    setCompanies([...filteredCompanies]);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // return (
  //   <>
  //     <SearchForm updateCompanies={updateCompanies}/>
  //     <div>
  //       {companies.map(company => (
  //         <div>
  //           <CompanyCard company={company} />
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // )
  return (
    <>
      <SearchForm updateCompanies={updateCompanies} />
      <div>
        {currentCompanies.map((company) => (
          <div key={company.id}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div id='CompanyPagination'>
        {companies.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={companies.length}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}

export default CompanyList;