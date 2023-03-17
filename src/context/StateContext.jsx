import { createContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

export const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const [recipeCategories, setRecipeCategories] = useState([]);
    const [selectedCate, setSelectedCate] = useState("Beef");
    const [input, setInput] = useState("");
    const [cateList, setCateList] = useState([]);
    const [random, setRandom] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchCate();
        fetchData();
    },[]);


    useEffect(() => {
        fetchRandom();
    },[location]);

    const fetchCate = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
        const data = await api.json();
        setRecipeCategories(data.meals);
        // console.log(data.meals);
    }

    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await api.json();
        setCateList(data.categories);
        // console.log(data.categories);
    }

    const fetchRandom = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        const data = await api.json();
        setRandom(data.meals[0]);
        // console.log(data.meals[0]);
    }

    const data = { 
        recipeCategories, setRecipeCategories, 
        selectedCate, setSelectedCate, 
        input, setInput , 
        cateList, setCateList, 
        random, setRandom
    };

    return (
        <StateContext.Provider value={ data }>
            {children}
        </StateContext.Provider>
    );
};