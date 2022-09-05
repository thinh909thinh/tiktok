import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0f85234bfaa37b6d626db139b6bec70a~c5_100x100.jpeg?x-expires=1662519600&x-signature=YZjlhffLAdfviv3ML5D3mV2PB64%3D"
                className={cx('avatar')}
                alt="hoa"
            ></Image>
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
