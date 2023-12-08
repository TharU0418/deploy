// import axios from "axios";
// import { response } from "express";
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function UpdateMovie({id}) {

//     // const locations = useLocation();
//     // const searchParams = new URLSearchParams(locations.search)
//     // const id = searchParams.get("id");

//     const[poster, setPoster] = useState('')
//     const[description, setDescrip] = useState('')
//     const[wstatus, setWStatus] = useState('')
//     const[myrank, setMyrank] = useState('')
    

//     async function submit(e){
//         e.preventDefault();

//         const updatedData = {
//             poster: poster,
//             description:  description,
//             wstatus: wstatus,
//             myrank: myrank 
//         };

//         axios.put(`/UpdateMovie/${id}`, updatedData)
//         .then((response) => console.log(response.data))
//         .catch((error) => console.log(error))

//     }



//     return(
//         <div className="updateMovie">
//             UpdateMovie
//             <p>{id}</p>


//             <form>
//                 <input type="text" placeholder={id}/>

//                 <input type="text" 
//                     onChange={(e) => setPoster(e.target.value)} 
//                     placeholder="Poster"
//                 />

//                 <input type="text" 
//                     onChange={(e) => setDescrip(e.target.value)} 
//                     placeholder="Description"
//                 />

//                 <input type="text" 
//                     onChange={(e) => setWStatus(e.target.value)} 
//                     placeholder="Watch Status"
//                 />

//                 <input type="text" 
//                     onChange={(e) => setMyrank(e.target.value)} 
//                     placeholder="My Rank"
//                 />

//                 <input type="submit" onClick={submit} />

//             </form>


//         </div>


//     )
// }
// export default UpdateMovie