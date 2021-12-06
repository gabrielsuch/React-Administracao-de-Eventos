import styled from "styled-components"

export const Remove = styled.div `
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

export const Adjust = styled.div `
    
`