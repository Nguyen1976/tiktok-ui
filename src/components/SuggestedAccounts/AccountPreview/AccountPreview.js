import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(styles)
function AccountPreview() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7108213275313537025.jpeg?lk3s=a5d48078&nonce=51036&refresh_token=75fa459d32da5c0bedaf33227e758caa&x-expires=1724637600&x-signature=dE1QurktICLmpTmzBtpteZOfCPo%3D&shp=a5d48078&shcp=81f88b70" alt=""/>
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyen199</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Nguyên</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;