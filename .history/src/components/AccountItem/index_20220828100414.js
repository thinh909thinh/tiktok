import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0668444ba12933872a4f5afb12166d6b~c5_100x100.jpeg?x-expires=1661824800&x-signature=Ci8Cr8blu5u1XJWnGxUBmtG8YqI%3D"
                className={cx('avatar')}
                alt="hoa"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>dasdas dasda</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyen aaa</span>
            </div>
        </div>
    );
}

export default AccountItem;
