import React from 'react'
import { Input } from 'antd'
import { useState } from 'react';
const { Search } = Input

const SearchFeature = (props) => {

    const [Value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
        props.refreshFunction(event.target.value)
    }

    return (
        <div>
            <Search 
                value={Value}
                onChange={handleChange}
                placeholder="Search By Typing"                
            />
        </div>
    )

};

export default SearchFeature;