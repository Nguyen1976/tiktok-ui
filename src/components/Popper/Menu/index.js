import React from 'react';
import { useState } from 'react';
// import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {
    
}

function Menu({ children, items, hideOnClick = false, onChange }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }}/>
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, -1))
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            //Để đặt lại trạng thái ban đầu khi tooltip bị ẩn đi bằng cách tạo mảng mới từ mảng cũ vì slice trả về 1 mảng mới
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
