import React from 'react';


const LAYOUT_DATA = [
    {
        key: 'flex-center',
        title: '水平主轴，水平、垂直都居中',
        code: '.flex-center'
    },
    {
        key: 'flex-vertical-middle',
        title: '水平主轴，水平方向开始，垂直方向居中',
        code: '.flex-vertical-middle'
    },
    {
        key: 'flex-between',
        title: '水平主轴，水平方向两边铺开，垂直方向居中',
        code: '.flex-between'
    },
    {
        key: 'flex-column',
        title: '垂直交叉轴为主轴',
        code: '.flex-column'
    },
    {
        key: 'flex-column-center',
        title: '垂直交叉轴为主轴，水平、垂直都居中',
        code: '.flex-column-center'
    },
    {
        key: 'flex-column-vertical-middle',
        title: '垂直交叉轴为主轴，在垂直方向居中',
        code: '.flex-column-vertical-middle'
    }
]

export default function Layout() {
    return (
        <div className="layout-area">
            {
                LAYOUT_DATA.map((item, index) => (
                    <div className="list" key={index}>
                        <div className={`layout-item ${item.key}`}>
                            <div>{item.key}</div>
                            <div>{item.title}</div>
                        </div>
                        <code>{item.code}</code>
                    </div>
                ))
            }
            <div className="absolute">
                <div className="absolute-center">绝对定位居中</div>
            </div>
        </div>
    )
}