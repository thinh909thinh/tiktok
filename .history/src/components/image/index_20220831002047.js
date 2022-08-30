import { forwardRef, useState } from 'react';
import images from '~/asset/image';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.NoImage);
    };
    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
