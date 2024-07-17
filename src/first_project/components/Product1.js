import React from "react";

export const Product1 =
{
    id: 1, title: ' LINEN SHEER GROMMET DRAPERY', price: '115000',
    images: [
        { idimg: 1, img: '/first_project/darkflax7.jpg' },
        { idimg: 2, img: '/first_project/darkflax4.jpg' },
        { idimg: 3, img: '/first_project/darkflax3.jpg' },
        { idimg: 4, img: '/first_project/darkflax2.jpg' },
    ],
    colors: [
        { idimac: 1, colorname: 'Brown', inventory: false, imgc: '/first_project/darcd.jpg' },
        { idimac: 2, colorname: 'Gray', inventory: true, imgc: '/first_project/darkflax.jpg' },
        { idimac: 3, colorname: 'golden', inventory: false, imgc: '/first_project/darcf.jpg' },
        { idimac: 4, colorname: 'Bright', inventory: false, imgc: '/first_project/darct.png' }
    ],
    sizes: [
        { idsiz: 1, inventory: false, size: '140CM * 220CM' },
        { idsiz: 2, inventory: false, size: '140CM * 300CM' },
        { idsiz: 3, inventory: true, size: '280CM * 300CM' },
        { idsiz: 4, inventory: false, size: '300CM * 300CM' },
    ],
    linings: [
        { idlin: 1, linin: 'Standard' },
        { idlin: 2, linin: 'Unlined' },
    ],

    more_information: [
        { idinfo: 1, title: 'Product Description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
        { idinfo: 2, title: 'Dimensions', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
        { idinfo: 3, title: 'Materials & Care', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
        { idinfo: 4, title: 'Shipping & Returns', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    ]

}