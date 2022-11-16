import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createDestination} from '../features/destinations/destinationsSlice'

function NewDestination() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createDestination({text}))
        setText('')
    }

  return (
    <section name="destination-form">
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label htmlFor="series">Series</label>
                <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div class="form-group">
                <button class="btn-register btn-form" type="submit">Add New Destination</button>
            </div>
        </form>
    </section>

  )
}

export default NewDestination