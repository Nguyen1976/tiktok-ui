import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Footer.module.scss';
import FooterItem from "./FooterItem";

const cx = classNames.bind(styles);

function Footer() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <h4 className={cx('more_content')}>NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</h4>
                </PopperWrapper>
            </div>
        )
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')} >
                <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" alt="game"/>
                <div className={cx('content')}>Tạo hiệu ứng TikTok, nhận phần thưởng</div>
            </div>
            <div className={cx('body')}>
                <FooterItem 
                    title="Công ty" 
                    menu={[
                        {
                            title: "Giới thiệu",
                            link: "#"
                        },
                        {
                            title: "Bảng tin",
                            link: "#"
                        },
                        {
                            title: "Liên hệ",
                            link: "#"
                        },
                    ]}
                /> 
                <FooterItem 
                    title="Chương trình" 
                    menu={[
                        {
                            title: "TikTok for Good",
                            link: "#"
                        },
                        {
                            title: "Quảng cáo",
                            link: "#"
                        },
                        {
                            title: "TikTok LIVE Creator Networks",
                            link: "#"
                        },
                    ]}
                /> 
                <FooterItem 
                    title="Điều khoản và chính sách" 
                    menu={[
                        {
                            title: "Trợ giúp",
                            link: "#"
                        },
                        {
                            title: "An toàn",
                            link: "#"
                        },
                        {
                            title: "Điều khoản",
                            link: "#"
                        },
                    ]}
                /> 
                <Tippy
                    interactive
                    offset={[-20, 10]}
                    placement='top'
                    render={renderPreview}
                >
                    <div className={cx('more')}>Thêm</div>
                </Tippy>
            </div>
            <div className={cx('footer')}>© 2024 TikTok</div>
        </div>
    );
}

export default Footer;