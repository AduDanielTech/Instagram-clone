import { useState, useEffect } from 'react';

function useSingleAndDoubleClick(actionSimpleClick, doubleClickLiked, delay = 700) {
    const [click, setClick] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            // simple click
            if (click === 1) actionSimpleClick();
            setClick(0);
        }, delay);
        const t = setTimeout(() => {
            // simple click
            let post = document.querySelector(".double-liked-logo")
     post.classList = `_ab6- double-liked-logo  `
        }, delay);
        // the duration between this click and the previous one
        // is less than the value of delay = double-click
        if (click === 2) doubleClickLiked();

        return () => clearTimeout(timer);
        
    }, [click]);

    return () => setClick(prev => prev + 1);
}
export default useSingleAndDoubleClick;