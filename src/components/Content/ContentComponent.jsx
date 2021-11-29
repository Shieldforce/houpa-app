import React, {useEffect, useState} from 'react';
import './ContentComponent.css';
import HeaderContentComponent from "../HeaderContent/HeaderContentComponent";
import HeaderManageContentComponent from "../HeaderManageContent/HeaderManageContentComponent";
import BodyContentComponent from "../BodyContent/BodyContentComponent";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import BodyManageContentComponent from "../BodyManageContent/BodyManageContentComponent";

function ContentComponent() {
    const [token, setToken] = useState('');
    const [search, setSearch] = useState('');
    const [ products, setProducts ] = useState([{
            id: 1,
            name: "First Product",
            description: "Description",
            price: 0.00,
            images : {
                id : 1,
                url : "",
                main : 1,
                product_id : 1,
            }
        }
    ]);

    const handleSearchProducts = async (search) => {
        if(search.length === 1)
        {
            const login = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email: 'teste@teste',
                    password: 'teste'
                }
            );
            setToken(login.data.data.access_token);
        }
        if(token!=="")
        {
            const { data:{data:{data}} } = await axios.get(
                "http://localhost:8080/api/product/search/"+search,
                {
                    headers: {'Authorization': `Bearer ${token}`}
                }
            );
            setProducts(data);
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const login = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email: 'teste@teste',
                    password: 'teste'
                }
            );
            const access_token = login.data.data.access_token;
            const { data:{data:{data}} } = await axios.get(
                "http://localhost:8080/api/product/",
                {
                    headers: {'Authorization': `Bearer ${access_token}`}
                }
            );
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <div className="App-ContentComponent">
            <BrowserRouter>
                <Routes>
                    {/*Rota de Loja de Produtos*/}
                    <Route
                        path="/"
                        element= {
                            <>
                                <HeaderContentComponent setProducts={setProducts} setSearch={setSearch} value={search} handleSearchProducts={handleSearchProducts}/>
                                <BodyContentComponent products={products} />
                            </>
                        }
                    />
                    {/*Rota de Gestão de Produtos*/}
                    <Route
                        path="/gerenciar"
                        element= {
                            <div>
                                <HeaderManageContentComponent setProducts={setProducts} setSearch={setSearch} value={search} handleSearchProducts={handleSearchProducts}/>
                                <BodyManageContentComponent products={products} />
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default ContentComponent;
