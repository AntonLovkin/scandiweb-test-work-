import { lazy, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '../components/AppBar/AppBar';
import Button from "../components/Button/Button";

import '../styles.css';

const ProductList = lazy(() => import('../components/ProductList/ProductList'));

// const initialProducts = [
//     { name: 'Anton', checked: false, id: 0, size: 100 },
//     { name: 'Tom', checked: false, id: 1, weight: 400 },
//     { name: 'Kate', checked: false, id: 2, length: 250, width: 100, height: 150 },
//     { name: 'Ann', checked: false, id: 3, size: 400 },
// ];
  
const ProductListViews = ()=> {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        if (!products) {
            setProducts(JSON.parse(window.localStorage.getItem('products')))
        } else {
            window.localStorage.setItem('products', JSON.stringify(products))
        }     
    }, [products]);

    const handleOnChangeCheckbox = (productId) => {
        setProducts(prevState => (
            prevState.map(product => {
                if (productId === product.id) {
                    return { ...product, checked: !product.checked }
                }
                return product;
            })
        ))
    };

    const deleteCheckedProducts = () => {
        setProducts(prevState => (
            prevState.filter(el => el.checked === false)
        ))
    };
  
    return (
        <>
            <h2>Product List Page</h2>
            <hr />
            <AppBar>
                <Link to='/addproduct'>
                    <Button >
                        ADD
                    </Button >
                </Link>
                <button type="button" id='delete-product-btn' onClick={deleteCheckedProducts}>
                    MASS DELETE
                </button>
            </AppBar>

            {products && <ProductList onChange={handleOnChangeCheckbox} products={products} />}
        </>
    );
}

export default ProductListViews;