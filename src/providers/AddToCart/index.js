import {createContext, useState} from "react"

export const AddToCartContext = createContext()

export const AddToCartProvider = ({children}) => {

    const [graduation, setGraduation] = useState([])
    const [wedding, setWedding] = useState([])
    const [confraternization, setConfraternization] = useState([])

    const addToGraduation = (beer) => {
        setGraduation([...graduation, beer])
    }

    const addToWedding = (beer) => {
        setWedding([...wedding, beer])
    }

    const addToConfraternization = (beer) => {
        setConfraternization([...confraternization, beer])
    }

    return (
        <AddToCartContext.Provider value={{addToGraduation, addToWedding, addToConfraternization, graduation, setGraduation, wedding, setWedding, confraternization, setConfraternization}}>
            {children}
        </AddToCartContext.Provider>
    )
}