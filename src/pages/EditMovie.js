import React, {useState, useEffect} from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditMovie({ movieId }) {

    const { itemId } = useParams();
    
  const history = useNavigate();

  const[data, setData] = useState([{}])
  const[updatedData, setUpdatedData] = useState({})
  const[status, setStatus] = useState('')

  const[production, setProduction] = useState('')
  const[category, setCategory] = useState('')
  const[poster, setPoster] = useState('')
  const[description, setDescrip] = useState('')
  const[wstatus, setWStatus] = useState('')
  const[myrank, setMyrank] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/AddMovie${movieId}')
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }, [movieId])

    const handleInputChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send updated data to backend API
        axios.put(`/movies/${movieId}`, updatedData)
          .then((response) => setStatus(response.data))
          .catch((error) => console.log(error));
      };

  return (
    <div className='addmovie-container'>
     
   

     <h1>Edit Movie</h1>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={updatedData.name || data.name}
          onChange={handleInputChange}
        />
        {/* Other input fields for the movie details */}
        <button type="submit">Update</button>
      </form>

    </div>
  )
}
export default EditMovie