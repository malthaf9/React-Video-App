import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [roomcode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
     e.preventDefault();
     navigate(`/room/${roomcode}`);
    }
    return (
        <div className='home-page'>
            <form onSubmit={handleFormSubmit} className='form'>
                <div>
                    <label>Enter Room Id</label>
                    <input value={roomcode} onChange={(e) => setRoomCode(e.target.value)} type='text' required placeholder='Enter Room Id' />
                </div>
                <button type='submit'>Enter Room</button>
            </form>
        </div>
    )
}

export default HomePage;