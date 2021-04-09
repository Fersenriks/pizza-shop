import React from 'react';
import { useSelector } from 'react-redux';

import { Sort, Categories, PizzaBlock } from '../components'

const Home = () => {

    

    const getPizzas = useSelector(({ pizzas }) => {
        return pizzas.items;
    });

    

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                />
                <Sort
                    items={[
                        { name: 'популярности', type: 'popular' },
                        { name: 'цене', type: 'price' },
                        { name: 'алфавиту', type: 'alphabet' },
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    getPizzas && getPizzas.map(
                        pizzaItem => <PizzaBlock
                            key={pizzaItem.id}
                            name={pizzaItem.name}
                            imgUrl={pizzaItem.imageUrl}
                            price={pizzaItem.price}
                            types={pizzaItem.types}
                            sizes={pizzaItem.sizes}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Home;
