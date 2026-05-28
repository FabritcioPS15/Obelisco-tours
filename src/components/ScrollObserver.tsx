import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay slightly to ensure React has painted the DOM
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.animationPlayState = 'running';
              entry.target.classList.add('has-animated');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      const elements = document.querySelectorAll(
        '[class*="animate-fade"], [class*="animate-zoom"], [class*="animate-skew"]'
      );

      elements.forEach((el) => {
        // Only observe elements that haven't animated yet
        if (!el.classList.contains('has-animated')) {
          (el as HTMLElement).style.animationPlayState = 'paused';
          observer.observe(el);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
