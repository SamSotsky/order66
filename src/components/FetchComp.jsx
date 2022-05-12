import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

// form: handleSubmit
// form: input => state
// need both whenever use form


const FetchComp = (props) => {
  const [category, setCategory] = useState();
  const [id, setId] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
  }

  const clearForm =()=>{
    setId("")
    setCategory("")
  }
    
    return (
    <div>
      <p>FetchComp</p>
      <form onSubmit={handleSubmit}>
        <p>
          Search For
          <select name='category' value={category}
            onChange={e=> setCategory(e.target.value)}>
            <option hidden> Choose a category</option>
            <option value="people"> People </option>
            <option value="planet"> Planet </option>
          </select>
          ID:
          <input type="text" name="id" value={id}
          onChange={e=>setId(e.target.value)}/>
          <button type='submit'> Search</button>
        </p>
      </form>
    </div>
  )
}

export default FetchComp