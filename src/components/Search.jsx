import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { StateContext } from '../context/StateContext';
import Recipe from './Recipe';


const Search = () => {

  const {name} = useParams();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchSearch();
  },[name]);

  const fetchSearch = async () => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await api.json();
    setSearch(data.meals);
    // console.log(data.meals);
  }

  //Filter method with recipes from useContext
  // const filter = recipes.filter((pd) => {
  //   if (name === '') {
  //     return pd;
  //   } else if (pd.strMeal.toLowerCase().includes(name.toLowerCase())){
  //     return pd;
  //   }
  // });

  return (

      search?

        <div>
          <h1 className='text-2xl mb-10 text-center font-medium'>- Search Results. -</h1>
          <div className='flex flex-wrap justify-start m-[-10px]'>
            {
                search.map(recipe => {
                  return(
                      <Recipe item={recipe} key={recipe.idMeal} />
                  )
                })
                //Filter method
                // filter.map(recipe => {
                //   return(
                //      <Recipe item={recipe} key={recipe.idMeal} />
                //   )
                // })
            }
          </div>
        </div>
      
      :

      <div className='py-40'>
        <p className='text-2xl mb-5 text-center font-medium'>- No result found -</p>
      </div>
      
  )

}

export default Search