import React from 'react'
import Nav from '../../components/Nav/Nav'
import Form from '../../components/Form/Form'
import style from "./CreatePokemon.module.css"

const CreatePokemon = () => {
  return (
    <> 
       <Nav/>
       <h1>Create your Pokemon</h1>
       <div className={style.FlexForm}>
          <Form/>
        </div>
    </>
  )
}

export default CreatePokemon