import React from 'react';

const SHAPE_DATA = [
    {
        key: 'size',
        title: '矩形',
        code: '.size(100px, 50px)'
    },
    {
        key: 'square',
        title: '正方形',
        code: '.square(100px)'
    },
    {
        key: 'circular',
        title: '圆形',
        code: '.circular(100px)'
    },
    {
        key: 'triangle-bottom',
        title: '下三角',
        code: '.triangle-bottom(50px, red)'
    },
    {
        key: 'triangle-left',
        title: '左三角',
        code: '.triangle-left(50px, green)'
    },
    {
        key: 'triangle-top',
        title: '上三角',
        code: '.triangle-top(50px, rebeccapurple)'
    },
    {
        key: 'triangle-right',
        title: '右三角',
        code: '.triangle-right(50px, blue)'
    }
];

export default function Shape() {
    return (
        <div className="shape-area">
            {
                SHAPE_DATA.map(item => (
                    <div className="shape-item" key={item.key}>
                        <div className={`${item.key}`}/>
                        <div>{item.title}</div>
                        <code>{item.code}</code>
                    </div>
                ))
            }
        </div>
    )
}