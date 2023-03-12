import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #00002d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Annoucement = () => {
    return (
        <Container>
            Aprovecha el 50% del BLACKFRIDAY!!
        </Container>

    )
}

export default Annoucement
