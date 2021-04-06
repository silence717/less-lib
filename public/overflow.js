import React from 'react';

export default function Overflow() {
    return (
        <div className="overflow-area">
            <div className="single">这里是单行文本超出</div>
            <div className="multi">这里是2行文本溢出，N行支持在css配置</div>
        </div>
    );
}