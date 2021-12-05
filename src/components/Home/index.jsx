import {Header, HomeTitle, Options, Main} from "./style"
import {FiHome} from "react-icons/fi"
import {FaGraduationCap, FaGlassCheers} from "react-icons/fa"
import {GiLargeDress} from "react-icons/gi"
import Card from "../Card/index"
import axios from "axios"
import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"

const Home = () => {

    const [beers, setBeers] = useState([])

    const history = useHistory()

    useEffect(() => {
        axios.get("https://api.punkapi.com/v2/beers")
        .then((response) => {
            setBeers([...beers, response.data])
        })
    }, [])

    return (
        <>
            <Header>
                <HomeTitle>
                    <h1 onClick={() => history.push("/")}><FiHome/></h1>
                </HomeTitle>
                <Options>
                    <h2 onClick={() => history.push("/graduation")}><FaGraduationCap/></h2>
                    <h2 onClick={() => history.push("/wedding")}><GiLargeDress/></h2>
                    <h2 onClick={() => history.push("/confraternization")}><FaGlassCheers/></h2>
                </Options>
            </Header>
            <Main>
                <ul>
                {
                    beers[0]?.map((beer, index) => (
                        <Card key={index} beer={beer}/>
                    ))
                }
                </ul>
            </Main>
        </>
    )
}

export default Home