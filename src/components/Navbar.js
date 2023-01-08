import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../features/filter/FilterSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.filter);
    const [input, setInput] = useState(search);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        dispatch(searched(e.target.value));

        
    };
    return (
        <div className=''>
            <div className='bg-black '>
                <div className='container mx-auto p-8'>
                    <div className='grid grid-cols-2 justify-between text-white'>
                        <div>logo</div>
                        <div>
                            <ul className='flex justify-end gap-5'>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>Home</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto p-8'>
                <input onChange={handleSubmit} value={input} className='w-full h-12 border-2 rounded-full px-8'  placeholder='Search'/>
            </div>
        </div>
    )
}

export default Navbar