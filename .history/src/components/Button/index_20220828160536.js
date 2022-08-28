import classNames from 'classnames/bind';
import styles from './Button/module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    children,
    onClick,
    ...passProps
}) {
    let Copm = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
    });
    const porps = {
        onClick,
        ...passProps,
    };
    // remove event whent button
    if (disable) {
        Object.keys(porps).forEach((keys) => {
            if (keys.startsWith('on') && typeof porps === 'function') {
                delete porps[keys];
            }
        });
    }
    if (to) {
        porps.to = to;
        Copm = Link;
    } else if (href) {
        porps.href = href;
        Copm = 'a';
    }
    return (
        <Copm className={classes} {...porps}>
            <span>{children}</span>
        </Copm>
    );
}

export default Button;
