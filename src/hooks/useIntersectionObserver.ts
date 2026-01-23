import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Once visible, we can disconnect if we only want the animation to trigger once
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            }
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            ...options
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return { elementRef, isVisible };
}
