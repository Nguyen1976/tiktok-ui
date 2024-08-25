import classNames from "classnames/bind";
import React from "react";
import { useState } from "react";

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)
function FooterItem({ title, menu }) {
    const [ isActive, setIsActive ] = useState(false);

    const handleActive = () => {
        setIsActive(prevState => !prevState)
    }

    return (
        <div className={cx('item')}>
            <h4 className={cx('title', {active: isActive})} onClick={handleActive}>
                {title}
            </h4>
            <div className={cx('menu', {active: isActive})}>
                {menu.map((item, index) => (
                    <a href={item.link} className={cx('menu_item')} key={index}>
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterItem;