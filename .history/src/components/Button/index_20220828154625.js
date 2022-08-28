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
    });
    const porps = {
        onClick,
        ...passProps,
    };
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
