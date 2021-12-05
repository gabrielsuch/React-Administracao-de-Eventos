import {Box, BeerImage, LeftSide, RightSide} from "../Card/style"

const AddToCart = ({beer}) => {
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
            </li>
        </>
    )
}

export default AddToCart