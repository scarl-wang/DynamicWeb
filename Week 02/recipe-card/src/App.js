//App gets a capital A because it's a react component

import "./components/RecipeCard.css"
// this is how we import img file data as a js variable
import RECIPE_IMG from "./assets/pancake.png" // this is imported as a javascript variable
import {RECIPE} from './components/recipe-data'

//() are needed in return statement if there are multiple lines

//the above is the same as this
//function App() {
//  return <div>App</div>
//}

//react doesn't allow sibling divs so we can use the empty <> instead
const App = () => {
    return (
        <div className='card'>
            <img src={RECIPE_IMG} alt="pancake" /> 

            <h2>{RECIPE.title}</h2>
            <p>{RECIPE.description}</p>
            <h3>Ingredients</h3>
            <ul>
                {RECIPE.ingredients.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            
            <h3>Instructions</h3>
            <ol>
                {RECIPE.instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}

export default App