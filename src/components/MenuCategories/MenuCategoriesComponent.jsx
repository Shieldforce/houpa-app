import React, {useEffect, useState} from 'react';
import './MenuCategoriesComponent.css';
import axios from "axios";

function MenuCategoriesComponent({ setProducts }) {

    const [ categories, setCategories ] = useState([
        {
            id: 0,
            name : "Todos",
            description : "Categoria Todos",
        }
    ]);

    const categoryClick = (id) => {
        const newCategories = categories.map((category) => {
            if(category.id === id){ setProducts(category.products) }
            if(category.id === id) return { ...category, marked: !category.marked }
            return { ...category, marked: false };
        });
        setCategories(newCategories);
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const login = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email: 'teste@teste',
                    password: 'teste'
                }
            );
            const access_token = login.data.data.access_token;
            const { data:{data:{data}} } = await axios.get(
                "http://localhost:8080/api/category/",
                {
                    headers: {'Authorization': `Bearer ${access_token}`}
                }
            );
            setCategories(data);
        }
        fetchCategories();
    }, []);

    return (
        categories.map((category) => (
            <span
                key={category.id}
                className="App-MenuCategoriesComponent col-4"
                style={ category.marked ? { borderBottom: "3px solid #5F12B6" } : { borderBottom: "0px solid #5F12B6" } }
                onClick={(e)=>{categoryClick(category.id)}}
            >
                { category.name }
            </span>
        ))
    );
}

export default MenuCategoriesComponent;
