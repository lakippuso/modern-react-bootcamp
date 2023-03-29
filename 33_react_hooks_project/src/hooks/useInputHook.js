import { useState } from "react";

export default function useInputHook(value) {
    const [state, setState] = useState(value);
    const input = (e) => {
        setState(e.target.value);
    };
    const resetInput = () => {
        setState("");
    };
    return [state, input, resetInput];
}
