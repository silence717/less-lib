import React from 'react';

const SHAPE_DATA = [
    {
        key: 'size',
        title: '矩形',
    },
    {
        key: 'square',
        title: '正方形',
    },
    {
        key: 'circular',
        title: '圆形',
    },
    {
        key: 'triangle-bottom',
        title: '下',
    },
    {
        key: 'triangle-left',
        title: '左',
    },
    {
        key: 'triangle-top',
        title: '上',
    },
    {
        key: 'triangle-right',
        title: '右',
    }
];

export default function Shape() {
    return (
        <div className="size-area">
            {
                SHAPE_DATA.map((item, index) => (
                    <div className="size-item" key={index}>
                        <div className={`${item.key}`}/>
                        <div>{item.key}</div>
                        <div>{item.title}</div>
                    </div>
                ))
            }
        </div>
    )
}