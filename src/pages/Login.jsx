import styled from "styled-components"
import {Link} from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5),
    ), url("")center;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-size: cover;
`
const Wrapper = styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
`
const Form = styled.form`
        display: flex;
        flex-direction: column;
`
const Title = styled.h1`
        font-size: 24px;
        font weight: 300;
`
const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;
`
const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
`
const Linki = styled.a`
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
`

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>Iniciar Sesión</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button>ENTRAR</Button>
                    </Link>
                    <Linki>¿OLVIDASTE TU CONTRASEÑA?</Linki>
                </Form>
                
            </Wrapper>
        </Container>
    )
}

export default Login
