// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview/AccountPreview';
import Image from '~/components/Image';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (  
       <div>
           <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement='bottom'
                render={renderPreview}
           >
                <div className={cx('account-item')}>
                    <Image 
                        className={cx('avatar')}
                        src='https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7108213275313537025.jpeg?lk3s=a5d48078&nonce=51036&refresh_token=75fa459d32da5c0bedaf33227e758caa&x-expires=1724637600&x-signature=dE1QurktICLmpTmzBtpteZOfCPo%3D&shp=a5d48078&shcp=81f88b70' alt='Nguyen'
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyen199</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Nguyên</p>
                    </div>
                </div>
           </Tippy>
       </div>
    );
}




export default AccountItem;