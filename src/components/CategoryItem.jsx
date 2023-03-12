import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
    border-color: white;
`
const Button = styled.button`
    border-color: none;
    padding: 10px;
    background-color: gray;
    color:white;
    font-weight: 600; 
    cursor: pointer;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
              <Title style={{ border: 'black'}}>
                    {item.title}
              </Title>
            <Link to="/ProductList" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Button>SHOP NOW</Button>
            </Link>
            </Info>

        </Container>
    )
}

export default CategoryItem
