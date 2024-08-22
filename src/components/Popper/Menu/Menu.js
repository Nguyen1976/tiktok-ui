import PropTypes from 'prop-types';
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

function Menu({ children, items, hideOnClick = false, onChange, ...passProps }) {

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

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    }
    return (
        <Tippy
            {...passProps}
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={() => {
                            setHistory(prev => prev.slice(0, -1))
                        }}/>}
                       <div className={cx('menu-body')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            //Để đặt lại trạng thái ban đầu khi tooltip bị ẩn đi bằng cách tạo mảng mới từ mảng cũ vì slice trả về 1 mảng mới
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children : PropTypes.node.isRequired,
    items : PropTypes.array,
    hideOnClick : PropTypes.bool,
    onChange : PropTypes.func,
}

export default Menu;
