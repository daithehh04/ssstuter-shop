const img1 = require('../Image/images/home-1.png');
const img2 = require('../Image/images/home-2.jpeg');
const img3 = require('../Image/images/home-3.jpeg');
const img4 = require('../Image/images/home-4.jpeg');

const img_m1 = require('../Image/images/slide-m1.jpeg');
const img_m2 = require('../Image/images/slide-m2.jpeg');
const img_m3 = require('../Image/images/slide-m3.jpeg');
const img_m5 = require('../Image/images/slide-m4.jpeg');
const img_m4 = require('../Image/images/slide-m5.jpeg');

const data = [
    {
        title: '',
        img: img1,
        description: '',
        path: '/FOR-HIM',
        device: 'tablet',
    },
    {
        title: '',
        img: img2,
        description: '',
        path: '/FOR-HER',
        device: 'tablet',
    },
    {
        title: '',
        img: img3,
        description: '',
        path: '/FOR-HIM',
        device: 'tablet',
    },
    {
        title: '',
        img: img4,
        description: '',
        path: '/FOR-HIM',
        device: 'tablet',
    },

    {
        title: '',
        img: img_m1,
        description: '',
        path: '/for-him',
        device: 'mobile',
    },
    {
        title: '',
        img: img_m2,
        description: '',
        path: '/for-him',
        device: 'mobile',
    },
    {
        title: '',
        img: img_m3,
        description: '',
        path: '/for-her',
        device: 'mobile',
    },
    {
        title: '',
        img: img_m4,
        description: '',
        path: '/for-him',
        device: 'mobile',
    },
    {
        title: '',
        img: img_m5,
        description: '',
        path: '/for-him',
        device: 'mobile',
    },
];

const getMobileSliderData = () => data.filter((e) => e.device === 'mobile');
const getTabletSliderData = () => data.filter((e) => e.device === 'tablet');

const heroSliderData = {
    getTabletSliderData,
    getMobileSliderData,
};

export default heroSliderData;
