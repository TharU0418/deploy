import { Container } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { Row } from 'react-bootstrap';

function SearchTvBar() {

    const [query, setQuery] = useState('');
    const [results, setResult] = useState('');

    const handleSearch = (e => {
        e.preventDefault();

        axios.get('http://localhost:8000/AddTvSeries')
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

export default SearchTvBar