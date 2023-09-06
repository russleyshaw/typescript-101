// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface ScrollToTopProps {
    children: React.ReactNode;
}

export function ScrollToTop(props: ScrollToTopProps) {
    const location = useLocation();
    useEffect(() => {
        // smooth scroll to top;
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location]);

    return <>{props.children}</>;
}

export default ScrollToTop;
