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

    const removeFromGraduation = (beer) => {
        setGraduation(graduation.filter((product) => {
            return product.id !== beer.id
        }))
    }

    const removeFromWedding = (beer) => {
        setWedding(wedding.filter((product) => {
            return product.id !== beer.id
        }))
    }

    const removeFromConfraternization = (beer) => {
        setConfraternization(confraternization.filter((product) => {
            return product.id !== beer.id
        }))
    }

    return (
        <AddToCartContext.Provider value={{addToGraduation, addToWedding, addToConfraternization, graduation, setGraduation, wedding, setWedding, confraternization, setConfraternization, removeFromGraduation, removeFromWedding, removeFromConfraternization}}>
            {children}
        </AddToCartContext.Provider>
    )
}