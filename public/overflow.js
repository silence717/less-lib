import React from 'react';

export default function Overflow() {
    return (
        <div className="overflow-area">
            <div className="item">
                <div className="single">单行文本溢出省略...</div>
                <pre>
                    <code>
                        width: 100px;
                        background: brown;
                        .text-overflow-ellipsis;
                    </code>
                </pre>
            </div>
            <div className="item">
                <div className="multi">这里是2行文本溢出，N行支持在css配置</div>
                <code>
                    width: 100px;
                    background: burlywood;
                    .multi-text-overflow-ellipsis(2);
                </code>
            </div>
        </div>
    );
}