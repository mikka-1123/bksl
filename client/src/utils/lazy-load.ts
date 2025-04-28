/**
 * Utility function to check if an element is in the viewport
 * Used for lazy loading the map component to improve performance
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.right >= 0
  );
};

/**
 * Adds an intersection observer to lazy load content
 * @param elementRef React ref to the element to observe
 * @param callback Function to call when element is in viewport
 */
export const useLazyLoad = (
  elementRef: React.RefObject<HTMLElement>,
  callback: () => void,
  options = { rootMargin: '200px 0px' }
): (() => void) => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) {
    // For browsers that don't support IntersectionObserver
    callback();
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        callback();
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    },
    options
  );

  if (elementRef.current) {
    observer.observe(elementRef.current);
  }

  return () => {
    if (elementRef.current) {
      observer.unobserve(elementRef.current);
    }
  };
}; 