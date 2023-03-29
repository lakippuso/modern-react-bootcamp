import { useState } from 'react';
export default function useInputHook() {
    const [state, setState] = useState('');
    const input = (value) =>{
        setState(value);
    }
    const resetInput = () =>{
        setState('');
    }
    return [state, input, resetInput];
}