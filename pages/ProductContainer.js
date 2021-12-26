import products from '../products.json'
import styles from '../styles/Home.module.css'
import ProductCard from './ProductCard';

function ProductContainer() {
    return (
        <div>
            <div className={styles.grid}>
                {products.map(product => {
                    return (
                        <ProductCard 
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            />
                );
            })}
            </div>
        </div>
    )
}


export default ProductContainer;