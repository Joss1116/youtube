import { Email, Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    flex: 1;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
    margin-bottom: 10px;
`

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>SWALETT</Logo>
                <Desc>
                    Tienda dedicada a la venta de productos de hombre. Nuestras categorias son: Carteras, relojes y tarjeteros.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" src="https://www.youtube.com/watch?v=aNBfkRuQx08">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <WhatsApp/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Email/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links Útiles</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Carteras</ListItem>
                    <ListItem>Relojes</ListItem>
                    <ListItem>Porta Tarjetas</ListItem>
                    <ListItem>Mi cuenta</ListItem>
                    <ListItem>Lista de deseos</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> Tienda Virtual
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +1 (829) 233-2800
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> swalettrd@gmail.com
                </ContactItem>
                <Payment src=""/>
            </Right>
        </Container>
    )
}

export default Footer
