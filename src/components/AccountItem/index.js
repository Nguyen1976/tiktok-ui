import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/884f5471a94fce0498ad2221229d28ae~c5_100x100.jpeg?lk3s=a5d48078&nonce=71912&refresh_token=0ee6d6bd843950af2a36f49cffe9e53c&x-expires=1723086000&x-signature=rxsEtDy0CRaUvi265Q5WQpTY0Jc%3D&shp=a5d48078&shcp=81f88b70' alt="Hoaa"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>Username</span>
            </div>
        </div>
    );
}

export default AccountItem;