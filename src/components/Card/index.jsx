import {Box, BeerImage, LeftSide, RightSide, Add} from "./style"

import {useContext} from "react"
import {AddToCartContext} from "../../providers/AddToCart/index"

const Card = ({beer}) => {

    const {addToGraduation, addToWedding, addToConfraternization} = useContext(AddToCartContext)

    return (
        <>
            <li>
                <Box>
                    <LeftSide>
                        <BeerImage>
                            <img src={beer.image_url} alt={beer.name} />    
                        </BeerImage> 
                    </LeftSide>
                    <RightSide>
                        <p>{beer.name}</p>
                        <p>{beer.description}</p>
                    </RightSide>
                </Box>
                <Add>
                    <button onClick={() => addToGraduation(beer)}>Formatura</button>
                    <button onClick={() => addToWedding(beer)}>Casamento</button>
                    <button onClick={() => addToConfraternization(beer)}>Confraternização</button>
                </Add>
            </li>
        </>
    )
}

export default Card