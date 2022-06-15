import ProductListItem from './ProductListItem/ProductListItem';
import styles from "./ProductList.module.css"

const ProductList = ({ onChange, products }) => {
    return (
        <ul className={styles.gallery}>
            {products.map(product =>
                <ProductListItem
                    key={product.id}
                    item={product}
                    onChange={onChange} />
            )}
        </ul>
    )
}

export default ProductList;