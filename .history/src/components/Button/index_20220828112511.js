import classNames from 'classnames/bind';
import styles from './Button/module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, primary, children, onClick }) {
    let Copm = 'button';
    const classes = cx('wrapper');
    const porps = {
        onClick,
    };
    if (to) {
        porps.to = to;
        Copm = Link;
    } else if (href) {
        porps.href = href;
        Copm = 'a';
    }
    return (
        <Copm className={classes}>
            <span>{children} {...porps}</span>
        </Copm>
    );
}

export default Button;
