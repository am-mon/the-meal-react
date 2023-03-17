import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Recipe from './Recipe';

const RecipebyCategory = () => {
    const [cateItems, setCateItems] = useState([]);
    const {cateName} = useParams();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateName}`);
        const data = await api.json();
        setCateItems(data.meals);
        // console.log(data.meals);
    }

    return (
        <div>
            <h1 className='text-2xl mb-10 md:mb-20 text-center font-medium'>- All {cateName} Recipes -</h1>
            <div className='flex flex-wrap justify-start m-[-10px]'>
                {
                    cateItems.map(recipe => {
                        return(
                            <Recipe item={recipe} key={recipe.idMeal} />
                        )
                    })
                }
            </div>
        </div>
       
    )
}

export default RecipebyCategory