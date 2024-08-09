import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from '~/components/Image'
const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/abd95ae25a622e8cb244f24cdefce94f.jpeg?lk3s=30310797&nonce=32640&refresh_token=e7af3c6e3e67ace8903858f321a4ecd9&x-expires=1723215600&x-signature=rS6swTyf9MgCe5D9AyuAok%2F7PcE%3D&shp=30310797&shcp=-' alt="Hoaa"/>
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