import styles from '../styles/Home.module.css'

function ProductCard(props) {
    return (
        <div>
            <div key={props.id} className={styles.card}>
                <h3>{props.title }</h3>
                <img src={props.image} alt={`Preview of ${props.title}`} />
                <p>{props.description}</p>
                <p>${props.price}</p>
                <p>
                    <button className="snipcart-add-item"
                    data-item-id={props.id}
                    data-item-image={props.image}
                    data-item-name={props.title}
                    data-item-price={props.price}
                >
                    Add to Cart
                </button>
                </p>
            </div>   
        </div>
    )
}

export default ProductCard;