// layout-check mode: append ?static to the URL to skip all GSAP animation
export const isStatic = () => new URLSearchParams(window.location.search).has("static");
