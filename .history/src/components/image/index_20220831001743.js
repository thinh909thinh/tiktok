import { forwardRef } from 'react';
import images from '~/asset/image';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    return <img ref={ref} src={src} alt={alt} {...props} />;
});

export default Image;
