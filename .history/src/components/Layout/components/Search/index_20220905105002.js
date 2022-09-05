import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import AccountItem from '~/components/AccountItem';
import { SeachIcon } from '~/components/icon';
function Search() {
    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Acc</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('seach')}>
                <input type="text" placeholder="Enter your name" spellCheck={false}></input>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                <button className={cx('search-btn')}>
                    <SeachIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
