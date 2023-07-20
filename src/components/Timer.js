import { useEffect } from 'react';

const Timer = ({ dispatch, secordsRemaining }) => {
    const mins = Math.floor(secordsRemaining / 60);
    const secords = secordsRemaining % 60;
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className='timer'>
            {mins < 10 && '0'}
            {mins}:{secords < 10 && '0'}
            {secords}
        </div>
    );
};

export default Timer;
