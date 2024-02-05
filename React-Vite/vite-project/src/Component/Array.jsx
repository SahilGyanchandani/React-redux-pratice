import React from "react";
import Fruit from "./Fruit";
import SingleData from "./SingleData";

export const sendFruit = React.createContext();
export default function Arrays() {
    // const fruits=["Mango","Banana","Apple","Orange","Berry"]
    const fruits = [
        {
            name: "Mango", price: 25, emoji: "🥭", soldout: true
        },
        {
            name: "Pine-Apple", price: 20, emoji: "🍍", soldout: false
        },
        {
            name: "Apple", price: 15, emoji: "🍎", soldout: false
        },
        {
            name: "orange", price: 30, emoji: "🍊", soldout: true
        }
    ]
    return (
        <div>
            <ul>

                {fruits.map(fruit =>
                    <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout} />)}
            </ul>
            <sendFruit.Provider value={fruits}>
                <SingleData></SingleData>
            </sendFruit.Provider>
        </div>
    );
}