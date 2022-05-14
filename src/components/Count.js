import React, {useReducer} from "react"

  //Les initialiser à l'extérieur de la fonction Count
  const initialState = 0;

  //Je lui le state et l'action pour obtenir le nouveau state
  const reducer = (state, action) => {
      switch(action) {
          case "increment":
              return state + 1
          case "decrement":
              return state - 1
          case "reinitialiser":
              return initialState
          default:
              return state
            
      }

  }
export default function Count() {
  

    //Apres la déclaration des 2 paramètres : 
    //un state et l'action pour retourner le nouveau state
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1> {count} </h1>
            {/** la methode me permet d'accéder à mon action */}
            <button onClick={() => dispatch("increment")}> Incrémenter </button>
            <button onClick={() => dispatch("decrement")}> Decrémenter </button>
            <button onClick={() => dispatch("reinitialiser")}> Réinitialiser </button>
        </div>
    )
}