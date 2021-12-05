import styled from "styled-components"

export const Box = styled.div `
    width: 400px;
    height: 256px;
    background-color: #313131;
    margin-top: 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 1px 1px 20px black;
    padding: 10px;
    display: flex;
    flex-direction: row;

    @media (max-width: 400px){
        width: 300px;
    }
`

export const LeftSide = styled.div `

`

export const RightSide = styled.div `
    p{
        font-size: 1.2rem;
        font-style: italic;
        word-break: break-word;
    }
    p:nth-child(1){
        color: orange;
        padding-bottom: 10px;
    }
    p:nth-child(2){
        text-overflow: ellipsis;
        overflow: hidden;
        height: 160px;
    }
`

export const BeerImage = styled.div `
    img {
        width: 150px;
        height: 200px;
        background-repeat: no-repeat;
        object-fit: contain;
    }
`

export const Add = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #313131;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-bottom: 10px;
    box-shadow: 1px 1px 5px black;

    button{
        background: linear-gradient(to right, green, #3BFF5F);
        color: black;
        text-shadow: 1px 1px 5px black;
        padding: 10px;
        margin: 0px 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        box-shadow: 1px 1px 20px black;

        @media (max-width: 400px){
            margin-top: 10px;
        }
    }
`