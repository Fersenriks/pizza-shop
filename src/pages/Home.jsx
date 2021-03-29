import React, { useEffect } from "react"
import axios from 'axios'
import { Sort, Categories, PizzaBlock } from '../components'

const Home = (props) => {
    const [getPizzas, setGetPizzas] = React.useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then(request => setGetPizzas(request.data))
    }, [])

    console.log(getPizzas)

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                />
                <Sort
                    items={['популярности', 'цене', 'алфавиту']}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    getPizzas && getPizzas.map(
                        pizzaItem => <PizzaBlock
                            name={pizzaItem.name}
                            imgUrl = {pizzaItem.imageUrl}
                            price={pizzaItem.price}
                            types={pizzaItem.types}
                        />)
                }
            </div>
        </div>
    )
}

export default Home
