import React from 'react';

const COLOR_DATA = [
    {
        key: '@color-white',
        value: '#fff',
        code: 'color: @color-white'
    },
    {
        key: '@color-transparent',
        value: 'transparent',
        code: 'color: @color-transparent'
    },
    {
        key: '@color-gray1',
        value: '#3d3d3d',
        code: 'color: @color-gray1'
    },
    {
        key: '@color-gray2',
        value: '#666',
        code: 'color: @color-gray2'
    },
    {
        key: '@color-gray3',
        value: '#e8e8e8',
        code: 'color: @color-gray3'
    },
    {
        key: '@color-gray4',
        value: '#999',
        code: 'color: @color-gray4'
    },
    {
        key: '@color-gray5',
        value: '#c0c4cc',
        code: 'color: @color-gray5'
    },
    {
        key: '@color-gray6',
        value: '#606266',
        code: 'color: @color-gray6'
    },
    {
        key: '@color-gray7',
        value: '#909399',
        code: 'color: @color-gray7'
    },
    {
        key: '@color-yellow1',
        value: '#ffa033',
        code: 'color: @color-yellow1'
    }
];

export default function Color() {
    return (
        <div className="color-area">
            {
                COLOR_DATA.map((item, index) => (
                    <div className="list">
                        <div className="color-item" key={index} style={{ background: `${item.value}`, color: (item.value === '#fff' || item.value === 'transparent') ? '#000' : '#fff' }}>
                            <span>{item.key}</span>
                            <span>{item.value}</span>
                        </div>
                        <code>{item.code}</code>
                    </div>
                ))
            }
        </div>
    )
}