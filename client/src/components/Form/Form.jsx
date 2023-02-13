import React,{useState,useEffect}from "react";
import { useDispatch,useSelector} from "react-redux"
import {getPokemonsTypes, createPokemon} from "../../redux/actions/index"
import style from "./Form.module.css"
import validate from "../../helpers/validate";

export default function Form () {
    const dispatch = useDispatch();
    const types = useSelector( state => state.pokemonsTypes);
    useEffect(()=>{
        dispatch(getPokemonsTypes())
    },[dispatch])
    
    const [state, setState] = useState({
        name: '',
        life: '',
        defense: '',
        attack: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    })
    const [errors, setErrors] = useState({}); 
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });// cada vez q hagas un cambio a mi target name agregale el value d lo q modifiques

        setErrors(validate({                 
            ...state,                        
            [e.target.name] : e.target.value
        }));
    }
    function handleSelect(e) {
            setState({
                ...state,
                types: [...state.types, {name:e.target.value}]
            });
            setErrors(validate({                 
                ...state,
                types: [...state.types, {name:e.target.value}]
            }));
    }
    function deleteTypes(e) {
        setState({
            ...state,
            types: state.types.filter(el => el.name !== e.target.name)
        });
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (    errors.name !== undefined 
                || errors.life !== undefined 
                || errors.defense !== undefined 
                || errors.attack !== undefined 
                ||errors.speed !== undefined 
                || errors.height !== undefined 
                || errors.weight !== undefined 
                || errors.types !== undefined 
        )  {
            // console.log("1")
            return alert("Sorry, all fields are required");
        } else if (state.name === "" 
            || state.life === "" 
            || state.defense === "" 
            || state.attack === "" 
            ||state.speed === "" 
            || state.height === "" 
            || state.weight === ""
            || state.types.length === 0
             ) {
                // console.log("2")
            return alert("Sorry, all fields are required");
        } else {
  
            
            dispatch(createPokemon(state))          
            
            setState({
                name: '',
                life: '',
                defense: '',
                attack: '',
                speed: '',
                height: '',
                weight: '',
                types: []
            })
            alert("Excellent, your new pokemon has been created successfully!!")
            
        }
    }
    return (
        <>
        <div className={style.boxForm}>
            <form onSubmit={(e)=>handleSubmit(e)}  action="">
                <div>
                    <label htmlFor="">Name: </label>
                    <input 
                        placeholder="name"
                        type="text" 
                        name="name"  
                        value={state.name}
                        onChange={ e => handleChange(e)}
                    />
                    {errors.name && (    
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Life: </label>
                    <input 
                        type="number"  
                        name="life"  
                        value={state.life} 
                        placeholder="life"
                        onChange={ e => handleChange(e)}  
                    />
                    {errors.life && (    
                        <p>{errors.life}</p>
                    )}
                </div>
                <div>
                <label htmlFor="">Defense: </label>
                    <input 
                        type="number"  
                        name="defense"  
                        value={state.defense}
                        placeholder="defense" 
                        onChange={ e => handleChange(e)}  
                    />
                    {errors.defense && (    
                        <p>{errors.defense}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Attack: </label>
                    <input 
                        type="number" 
                        name="attack"  
                        value={state.attack} 
                        placeholder="attack" 
                        onChange={ e => handleChange(e)}
                    />
                    {errors.attack && (    
                        <p>{errors.attack}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Speed: </label>
                    <input 
                        type="number"   
                        name="speed"  
                        value={state.speed} 
                        placeholder="speed" 
                        onChange={ e => handleChange(e)}
                    />
                    {errors.speed && (    
                        <p>{errors.speed}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Height</label>
                    <input 
                        type="number"   
                        name="height"  
                        value={state.height} 
                        placeholder="height"
                        onChange={ e => handleChange(e)}
                    />
                    {errors.height && (    
                        <p>{errors.height}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Weight: </label>
                    <input 
                        type="number"  
                        name="weight"  
                        value={state.weight} 
                        placeholder="weight"
                        onChange={ e => handleChange(e)}
                    />
                    {errors.weight && (    
                        <p>{errors.weight}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Select Types</label>
                    <select onChange={(e)=>handleSelect(e)}>
                        {
                            types.map( e => {
                                return (
                                    <option key={e.name} value={`${e.name}`}>{e.name}</option>
                                )
                            })
                        }
                    </select>
                    {errors.types && (    
                        <p>{errors.types}</p>
                    )}
                </div>
                <div>
                    <input className={style.btnPrimary} type="submit" value="Send"/>
                </div>
            </form>
        </div>
            <div className={style.boxTypesFather}>
                <h3>Types</h3>
                <div className={style.boxTypes}>
                    {
                        state.types?.map( (e) => {
                            return (
                                
                                <div key={e.name}>
                                    <div  className={style.types}>
                                        <li>{e.name}</li>
                                        <button name={`${e.name}`} onClick={(e)=>{deleteTypes(e)}}>X</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </>
    )
}