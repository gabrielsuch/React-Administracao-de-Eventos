import styled from "styled-components"

export const Header = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
    background-color: #313131;
    box-shadow: 1px 1px 20px black;
    padding: 10px 0px;

    @media (max-width: 650px){
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 530px){
        display: flex;
        flex-direction: column;
    }
`

export const HomeTitle = styled.div `
    cursor: pointer;

    h1{
        cursor: pointer;
        margin-left: 20px;
    }
    h1:hover{
        transition-duration: 0.5s;
        color: #131313;
    }
`

export const Options = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h2{
        cursor: pointer;
        margin-left: 20px;
    }
    h2:hover{
        transition-duration: 0.5s;
        color: #131313;
    }
    
    @media (max-width: 530px){
        display: flex;
        flex-direction: column;
    }
`

export const Main = styled.div `
    width: 70%;
    margin: 20px auto;
    padding: 20px;

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style: none;
    }
`