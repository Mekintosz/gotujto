/**
 * Converts an image path to responsive variants
 * @param {string} imagePath - Original image path (e.g., "/images/photo.jpg")
 * @returns {object} - Object with src and srcSet for responsive images
 */
export function getResponsiveImage(imagePath) {
  if (!imagePath) return { src: "", srcSet: "" };
  
  const ext = imagePath.substring(imagePath.lastIndexOf('.'));
  const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  
  return {
    src: `${basePath}-800w${ext}`,
    srcSet: `${basePath}-800w${ext} 800w, ${basePath}-1600w${ext} 1600w`,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  };
}
