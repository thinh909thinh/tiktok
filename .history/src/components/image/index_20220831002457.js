import { forwardRef, useState } from 'react';
import images from '~/asset/image';
import styles from './image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.NoImage);
    };
    return (
        <img
            className={classnames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
