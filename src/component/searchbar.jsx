import {useState} from "react";
import {useHistory} from "react-router-dom";

const SearchBar= ()=>{
  const[country, setCountry]=useState("");
  const history= useHistory();


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(country){
        history.push(`/details/${country}`);
    }
  }

    return(
        <div>
            <form otnSubmit={handleSubmit}>
                <input type="text" value={country}
                onChange={(e)=> setCountry(e.target.value)}
                placeholder="enter country name"/>
                <button type ="submit">search</button>

            </form>
        </div>
    );
};

export default SearchBar;