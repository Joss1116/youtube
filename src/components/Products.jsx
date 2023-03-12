import styled from "styled-components"
import {hotProducts} from "../data"
import Product from "./Product"

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
            {hotProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products