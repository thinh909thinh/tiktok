import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="" className={cx('avatar')} alt="hoa"></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>dasdas dasda</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyen aaa</span>
            </div>
        </div>
    );
}

export default AccountItem;
