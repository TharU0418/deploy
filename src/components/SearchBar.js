import { Container } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SearchBar() {

    const [query, setQuery] = useState('');
    const [results, setResult] = useState('');

    const [selectedId, setSelectedId] = useState(null);

    function handleButtonClick (item){
      setSelectedId(item.id);
      window.scrollTo({
        top:0,
        behavior:"smooth"
      });
    }

    const handleSearch = (e => {
        e.preventDefault();

        axios.get('http://localhost:8000/AddMovie')
        .then((response) => {
            setResult(response.data);
           
            console.log(results)
        })
        .catch((error) => {
            console.error('Error searching: ', error)
        });
    })

  return (
    <div className='search-bar' >
        <form onSubmit={handleSearch}>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search"
            />
            <button type="submit">🔍</button>
        </form>



        <Container style={{
                display:'flex',
                flexDirection:'column',
                rowGap:'10px',
                justifyContent: 'center'
            }}>
                <Row>
        {Array.isArray(results) && results.length > 0 ? (
          results.map((item) => {
            if (item.name === query) {
              return (
                <React.Fragment key={item.id}>
                  <div className='movie-palet'>
                      <div className='search-top-side'>
                        <div>{item.name}</div>
                        <div>{item.year}</div>
                      </div>
                        <div className='search-middle-side'>
                          <div className='search-poster'>
                            <img src={item.poster} alt={item.name} />
                          </div>
                          <div className='search-description'>
                            <div>{item.category}</div>
                              <div>{item.production}</div>
                              <div>{item.description}</div>
                              <div>{item.myrank}</div>
                              <Link to={`/UpdatePage?id=${item._id}`} onClick={handleButtonClick}>
              <i class="bi bi-pen" style={{marginLeft:'40px', backgroundColor:'white', borderRadius:'5px', padding:'5px'}}></i>
              </Link>
                          </div>
                          
                        </div>
                    </div>
                </React.Fragment>
              );
            } else {
              return null; // or any other fallback if you don't want to render anything
            }
          })
          ) : (
          <p>No results found.</p>
          )}
   
   </Row>
            </Container>
       

    </div>
  )
}

export default SearchBar