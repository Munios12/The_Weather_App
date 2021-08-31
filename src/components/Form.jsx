import React, {useState} from 'react'
import '../styles/Form-styles.css'
export const Form = ({setCity}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCity([inputValue]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    className='inputBox'
                    type='text'
                    value={inputValue}
                    placeholder='Type...'
                    onChange={handleInputChange}
                    />
            </form>
            
        </>
    )
}
