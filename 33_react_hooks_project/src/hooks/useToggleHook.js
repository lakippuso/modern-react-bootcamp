import { useState } from "react";
export default function useToggleHook(value = false) {
    const [state, setState] = useState(value);
    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
}
