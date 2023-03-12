import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
  
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;   
`
const Option = styled.option`

`

function ProductList() {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Title>Carteras</Title>
            <FilterContainer>
                <Filter><FilterText>Filter products: </FilterText>
                <Select>
                    <Option disable selected>
                        Color
                    </Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                </Select>
                <Select>
                    <Option disable selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                
                </Filter>
                <Filter><FilterText>Sorts products: </FilterText>
                
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    
                </Select>
                
                
                </Filter>
             </FilterContainer> 
            <Products/>
            <Newsletter/>
            <Footer/>

        </Container>
    )
}

export default ProductList
