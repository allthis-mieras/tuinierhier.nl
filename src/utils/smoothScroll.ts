import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Initialize Lenis smooth scroll
 */
export function initSmoothScroll(): Lenis | null {
  // Don't initialize if user prefers reduced motion
  if (prefersReducedMotion()) {
    return null;
  }

  // Don't initialize if already exists
  if (lenis) {
    return lenis;
  }

  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP ticker for smooth animations
    tickerCallback = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    gsap.ticker.lagSmoothing(0);

    return lenis;
  } catch (error) {
    console.warn('Failed to initialize Lenis smooth scroll:', error);
    return null;
  }
}

/**
 * Destroy Lenis instance and cleanup
 */
export function destroySmoothScroll(): void {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
  
  // Remove GSAP ticker callback if it exists
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
}

/**
 * Refresh ScrollTrigger after Lenis initialization
 */
export function refreshScrollTrigger(): void {
  if (!prefersReducedMotion()) {
    ScrollTrigger.refresh();
  }
}

/**
 * Get current Lenis instance
 */
export function getLenisInstance(): Lenis | null {
  return lenis;
}
