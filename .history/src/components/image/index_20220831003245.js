import { forwardRef, useState } from 'react';
import images from '~/asset/image';
import styles from './image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ src, alt, className, customFallback = images.NoImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
