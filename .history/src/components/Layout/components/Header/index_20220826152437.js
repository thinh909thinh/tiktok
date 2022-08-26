import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import images from '~/asset/image';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className={cx('seach')}>
                    <input type="text" className={cx('input')} placeholder="Enter your name" spellCheck={false}></input>
                    <button className={cx('clear')}>{/* <FontAwesomeIcon icon={faCircleXmark} /> */}</button>
                    {}
                    <button className={cx('search-btn')}>{}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
