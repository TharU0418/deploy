import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function AddTvSeries() {

    const history = useNavigate();

    const[letter, setLetter] = useState('')
  const[name, setName] = useState('')
  const[year, setYear] = useState('')
  const[production, setProduction] = useState('')
  const[category, setCategory] = useState('')
  const[poster, setPoster] = useState('')
  const[description, setDescrip] = useState('')
  const[wstatus, setWStatus] = useState('')
  const[myrank, setMyrank] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/AddTvSeries", {
            letter,name,year,production,category,poster,description,wstatus,myrank
        })
        .then(res =>{
          
            if(res.data == "exit"){
                alert("This TV Series already Exit.")
            }else if(res.data == "notexist"){
                history("/home", {state:{id:name}})
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e)
        })
    }catch(e){
        console.log(e)
    }

  }

  return (
    <div className='addmovie-container'>
        <form>
      <input
        type="text"
        onChange={(e) => setLetter(e.target.value)}
        placeholder="letter"
      />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        onChange={(e) => setYear(e.target.value)}
        placeholder="year"
      />
      <input
        type="text"
        onChange={(e) => setProduction(e.target.value)}
        placeholder="Production"
      />
      <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        onChange={(e) => setPoster(e.target.value)}
        placeholder="Poster"
      />
      <input
        type="text"
        onChange={(e) => setDescrip(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        onChange={(e) => setWStatus(e.target.value)}
        placeholder="Watch Status"
      />
      <input
        type="text"
        onChange={(e) => setMyrank(e.target.value)}
        placeholder="My Rank"
      />

      <input type="submit" onClick={submit} />
    </form>

    </div>
  )
}

export default AddTvSeries