import React, {useReducer} from "react"

  //Les initialiser à l'extérieur de la fonction Count
  //const initialState = 0;
  //Le state initial est différent du state, le state a la valeur du 
  //compteur actuel
  const initialState = {
      countOne: 0,
      countTwo: 0
  }

  //Je lui le state et l'action pour obtenir le nouveau state
  const reducer = (state, action) => {
      switch(action.type) {
          case "increment":
              return {...state, countOne: state.countOne + action.value}
          case "decrement":
              return {...state, countOne: state.countOne - action.value}
          case "increment2":
                return {...state, countTwo: state.countTwo + action.value}
          case "decrement2":
                return {...state, countTwo: state.countTwo - action.value}
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
      <>
        <div>
            <h1> {count.countOne} </h1>
            {/** la methode me permet d'accéder à mon action */}
            <button onClick={() => dispatch({type: "increment", value: 1})}> Incrémenter </button>
            <button onClick={() => dispatch({type: "decrement", value:1})}> Decrémenter </button>
            <button onClick={() => dispatch({type: "reinitialiser"})}> Réinitialiser </button>
        </div>

        <div>
            <h1> {count.countTwo} </h1>
            {/** la methode me permet d'accéder à mon action */}
            <button onClick={() => dispatch({type: "increment2", value: 10})}> Incrémenter </button>
            <button onClick={() => dispatch({type: "decrement2", value:5})}> Decrémenter </button>
            <button onClick={() => dispatch({type: "reinitialiser"})}> Réinitialiser </button>
        </div>
      </>
    )
}