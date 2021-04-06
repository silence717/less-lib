import React from 'react';

const COLOR_DATA = [
    {
        key: '@color-white',
        value: '#fff'
    },
    {
        key: '@color-transparent',
        value: 'transparent'
    },
    {
        key: '@color-gray1',
        value: '#3d3d3d'
    },
    {
        key: '@color-gray2',
        value: '#666'
    },
    {
        key: '@color-gray3',
        value: '#e8e8e8'
    },
    {
        key: '@color-gray4',
        value: '#999'
    },
    {
        key: '@color-gray5',
        value: '#c0c4cc'
    },
    {
        key: '@color-gray6',
        value: '#606266'
    },
    {
        key: '@color-gray7',
        value: '#909399'
    },
    {
        key: '@color-yellow1',
        value: '#ffa033'
    }
];

export default function Color() {
    return (
        <div className="color-area">
            {
                COLOR_DATA.map((item, index) => (
                    <div className="color-item" key={index} style={{ background: `${item.value}`, color: (item.value === '#fff' || item.value === 'transparent') ? '#000' : '#fff' }}>
                        <span>{item.key}</span>
                        <span>{item.value}</span>
                    </div>
                ))
            }
        </div>
    )
}