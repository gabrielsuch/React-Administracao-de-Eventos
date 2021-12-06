import {Header, HomeTitle, Options, Main} from "../Home/style"
import {FiHome} from "react-icons/fi"
import {FaGraduationCap, FaGlassCheers} from "react-icons/fa"
import {GiLargeDress} from "react-icons/gi"
import {useHistory} from "react-router-dom"
import {useContext} from "react"
import {AddToCartContext} from "../../providers/AddToCart/index"
import AddToCart from "../AddToCart/index"
import {Remove, Adjust} from "../AddToCart/style"

const Confraternization = () => {

    const {confraternization, removeFromConfraternization} = useContext(AddToCartContext)

    const history = useHistory()

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
                    confraternization.map((beer, index) => (
                        <>
                            <Adjust>
                                <AddToCart key={index} beer={beer}/>
                                <Remove>
                                    <button onClick={() => removeFromConfraternization(beer)}>Remover</button>
                                </Remove>
                            </Adjust>
                        </>
                    ))
                }
                </ul>
            </Main>
        </>
    )
}

export default Confraternization