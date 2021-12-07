import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>To-do List</h1>
            <Button
                color = {showAdd? 'cadetblue' : 'black'}
                text = {showAdd ? 'Close' : 'Add'}
                onClick = {onAdd}
            />
        </header>
    )
}

export default Header
