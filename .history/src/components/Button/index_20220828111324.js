import classNames from 'classnames/bind';
import Styles from 'Button/module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onClick }) {
    let Copm = 'button';
    const classes = cx('wrapper');
    return (
        <Copm className={classes}>
            <span>{children}</span>
        </Copm>
    );
}

export default Button;
