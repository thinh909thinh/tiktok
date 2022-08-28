import classNames from 'classnames/bind';
import styles from './Button/module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary, children, onClick }) {
    let Copm = 'button';
    const classes = cx('wrapper');
    const porps = {
        onClick,
    };
    if (to) {
        porps.to = to;
    } else if (href) {
        porps.href = href;
    }
    return (
        <Copm className={classes}>
            <span>{children} {...porps}</span>
        </Copm>
    );
}

export default Button;
