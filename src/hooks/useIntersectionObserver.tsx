import React from 'react';
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.15,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Se triggerOnce for true, para de observar após primeira intersecção
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

// Hook para múltiplos elementos com stagger
export const useStaggeredIntersectionObserver = (
  count: number,
  options: UseIntersectionObserverOptions = {}
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(count).fill(false)
  );
  const elementRefs = useRef<(HTMLElement | null)[]>(
    new Array(count).fill(null)
  );

  const {
    threshold = 0.15,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [count, threshold, rootMargin, triggerOnce]);

  const setElementRef = (index: number) => (el: HTMLElement | null) => {
    elementRefs.current[index] = el;
  };

  return { setElementRef, visibleItems };
};

// Componente wrapper para animações
interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'scale-in';
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'aside' | 'main' | 'header' | 'footer' | 'span';
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-in-up',
  className = '',
  delay = 0,
  as = 'div'
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const animationClass = isVisible ? `${animation} visible` : animation;
  const staggerClass = delay > 0 ? `stagger-${Math.min(delay, 8)}` : '';
  const ComponentTag = (as as any);
  
  return (
    <ComponentTag
      ref={elementRef as any}
      className={`${animationClass} ${staggerClass} ${className}`.trim()}
    >
      {children}
    </ComponentTag>
  );
};