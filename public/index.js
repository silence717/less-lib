import React from 'react';
import ReactDOM from 'react-dom';
import Color from './color';
import Shape from './shape';
import Layout from './layout';
import Overflow from './overflow';

import './style.less';

const Components = {
    color: Color,
    shape: Shape,
    layout: Layout,
    overflow: Overflow
};

const renderComponent = type => {
    const CurrrntComponent = Components[type];
    return <CurrrntComponent />;
}

const PAGE_DATA = [
    {
        key: 'color',
        title: 'Color 色值'
    },
    {
        key: 'shape',
        title: 'Shape 形状'
    },
    {
        key: 'layout',
        title: 'Layout 布局'
    },
    {
        key: 'overflow',
        title: 'Overflow 文本溢出'
    }
];

const Demo = () => {
    return (
        <main>
            <h1>项目中常用less封装，可按需扩展</h1>
            {
                PAGE_DATA.map((item, index) => (
                    <section key={index}>
                        <h2>{item.title}</h2>
                        { item.key && renderComponent(item.key) }
                    </section>
                ))
            }
        </main>
    )
};

const container = document.querySelector('#root');
ReactDOM.render(<Demo />, container);
