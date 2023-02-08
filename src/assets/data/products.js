const product_01_image_01 = require('../Image/images/prd1.1.jpeg');
const product_01_image_02 = require('../Image/images/prd1.2.jpeg');

const product_02_image_01 = require('../Image/images/prd2.1.jpeg');
const product_02_image_02 = require('../Image/images/prd2.2.jpeg');

const product_03_image_01 = require('../Image/images/prd3.1.jpeg');
const product_03_image_02 = require('../Image/images/prd3.2.jpeg');

const product_04_image_01 = require('../Image/images/prd4.1.jpeg');
const product_04_image_02 = require('../Image/images/prd4.2.jpeg');

const product_05_image_01 = require('../Image/images/prd5.1.jpeg');
const product_05_image_02 = require('../Image/images/prd5.2.jpeg');

const product_06_image_01 = require('../Image/images/prd6.1.jpeg');
const product_06_image_02 = require('../Image/images/prd6.2.jpeg');

const product_07_image_01 = require('../Image/images/prd7.1.jpeg');
const product_07_image_02 = require('../Image/images/prd7.2.jpeg');

const product_08_image_01 = require('../Image/images/prd8.1.jpeg');
const product_08_image_02 = require('../Image/images/prd8.2.jpeg');

const product_09_image_01 = require('../Image/images/prd9.1.jpeg');
const product_09_image_02 = require('../Image/images/prd9.2.jpeg');

const product_10_image_01 = require('../Image/images/prd10.1.jpeg');
const product_10_image_02 = require('../Image/images/prd10.2.jpeg');

const product_11_image_01 = require('../Image/images/prd11.1.jpeg');
const product_11_image_02 = require('../Image/images/prd11.2.jpeg');

const product_12_image_01 = require('../Image/images/prd12.1.jpeg');
const product_12_image_02 = require('../Image/images/prd12.2.jpeg');

const product_101_image_01 = require('../Image/images/nu-01.jpeg');
const product_101_image_02 = require('../Image/images/nu-02.jpeg');

const product_102_image_01 = require('../Image/images/nu-03.jpeg');
const product_102_image_02 = require('../Image/images/nu-04.jpeg');

const product_103_image_01 = require('../Image/images/nu-05.jpeg');
const product_103_image_02 = require('../Image/images/nu-06.jpeg');

const product_104_image_01 = require('../Image/images/nu-07.jpeg');
const product_104_image_02 = require('../Image/images/nu-08.jpeg');

const product_105_image_01 = require('../Image/images/nu-09.jpeg');
const product_105_image_02 = require('../Image/images/nu-10.jpeg');

const product_106_image_01 = require('../Image/images/nu-11.jpeg');
const product_106_image_02 = require('../Image/images/nu-12.jpeg');

const product_107_image_01 = require('../Image/images/nu-13.jpeg');
const product_107_image_02 = require('../Image/images/nu-14.jpeg');

const product_108_image_01 = require('../Image/images/nu-15.jpeg');
const product_108_image_02 = require('../Image/images/nu-16.jpeg');

const product_109_image_01 = require('../Image/images/nu-17.jpeg');
const product_109_image_02 = require('../Image/images/nu-18.jpeg');

const product_110_image_01 = require('../Image/images/nu-19.jpeg');
const product_110_image_02 = require('../Image/images/nu-20.jpeg');

const product_111_image_01 = require('../Image/images/nu-21.jpeg');
const product_111_image_02 = require('../Image/images/nu-22.jpeg');

const product_112_image_01 = require('../Image/images/nu-23.jpeg');
const product_112_image_02 = require('../Image/images/nu-24.jpeg');

const product_113_image_01 = require('../Image/images/nu-25.jpeg');
const product_113_image_02 = require('../Image/images/nu-26.jpeg');

const product_114_image_01 = require('../Image/images/nu-27.jpeg');
const product_114_image_02 = require('../Image/images/nu-28.jpeg');

const product_115_image_01 = require('../Image/images/nu-29.jpeg');
const product_115_image_02 = require('../Image/images/nu-30.jpeg');

const products = [
    {
        title: 'Smart Pants',
        price_old: '299000',
        price: '419000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: 'quan-tay',
        colors: ['white', 'red', 'orange'],
        slug: 'smart pants',
        size: ['s', 'm', 'l', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Great Life Tee',
        price_old: '299000',
        price: '64500',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'blue'],
        slug: 'great-life-tee',
        size: ['s', 'm'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Man Shirt',
        price_old: '299000',
        price: '379000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'red', 'orange', 'yellow'],
        slug: 'man-shirt',
        size: ['m'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Stone Shorts',
        price_old: '299000',
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: 'quan-tay',
        colors: ['white', 'orange', 'blue'],
        slug: 'stone-shorts',
        size: ['xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Felix Shirt',
        price_old: '299000',
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'pink'],
        slug: 'felix-shirt',
        size: ['xxl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Sunflower Polo Tee',
        price_old: '299000',
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: 'ao-thun',
        colors: ['black'],
        slug: 'sunflower-polo-tee',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Form Jeans-Ⅱ',
        price_old: '299000',
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: 'quan-jean',
        colors: ['white', 'red', 'orange', 'blue'],
        slug: 'form-jeans-II',
        size: ['l', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Check Conrad Shirt',
        price_old: '299000',
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'red', 'black'],
        slug: 'conrad-shirt',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Great Tee',
        price_old: '299000',
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'blue'],
        slug: 'great-tee-2',
        size: ['m'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Laplace Shirt',
        price_old: '299000',
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: 'ao-somi',
        colors: ['blue', 'black'],
        slug: 'laplace-shirt',
        size: ['l'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Sss.Cable-Knit Jacket',
        price_old: '299000',
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: 'ao-somi',
        colors: ['blue', 'black'],
        slug: 'cable-knit-jacket',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    {
        title: 'Classic Shirt',
        price_old: '299000',
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: 'ao-somi',
        colors: ['blue'],
        slug: 'classic shirt',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nam',
    },
    // {
    //     title: 'Áo thun Dinosaur 13',
    //     price_old: '299000',
    //     price: '189000',
    //     image01: product_01_image_01,
    //     image02: product_01_image_02,
    //     categorySlug: 'ao-thun',
    //     colors: ['white', 'red'],
    //     slug: 'ao-thun-dinosaur-13',
    //     size: ['s', 'm', 'xl'],
    // },
    // {
    //     title: 'Áo thun Dinosaur 14',
    //     price_old: '299000',
    //     price: '159000',
    //     image01: product_02_image_01,
    //     image02: product_02_image_02,
    //     categorySlug: 'ao-thun',
    //     colors: ['white', 'blue'],
    //     slug: 'ao-thun-dinosaur-14',
    //     size: ['s', 'm'],
    // },
    // {
    //     title: 'Áo thun Dinosaur 15',
    //     price_old: '299000',
    //     price: '190000',
    //     image01: product_03_image_01,
    //     image02: product_03_image_02,
    //     categorySlug: 'ao-thun',
    //     colors: ['red', 'blue'],
    //     slug: 'ao-thun-dinosaur-15',
    //     size: ['xl'],
    // },
    // {
    //     title: 'Áo somi dài tay 16',
    //     price_old: '299000',
    //     price: '194000',
    //     image01: product_08_image_01,
    //     image02: product_08_image_02,
    //     categorySlug: 'ao-somi',
    //     colors: ['blue', 'black'],
    //     slug: 'ao-somi-dai-tay-16',
    //     size: ['m', 'xl'],
    // },
    // {
    //     title: 'Áo somi tay dài 17',
    //     price_old: '299000',
    //     price: '194000',
    //     image01: product_09_image_01,
    //     image02: product_09_image_02,
    //     categorySlug: 'ao-somi',
    //     colors: ['white', 'blue'],
    //     slug: 'ao-somi-tay-dai-17',
    //     size: ['s', 'l', 'xl'],
    // },
    // {
    //     title: 'Quần jean phong cách 18',
    //     price_old: '299000',
    //     price: '194000',
    //     image01: product_10_image_01,
    //     image02: product_10_image_02,
    //     categorySlug: 'quan-jean',
    //     colors: ['blue', 'black'],
    //     slug: 'quan-jean-phong-cach-18',
    //     size: ['s', 'm', 'l', 'xl'],
    // },
    {
        title: 'Unum Tank',
        price_old: '299000',
        price: '299000',
        image01: product_101_image_01,
        image02: product_101_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'orange'],
        slug: 'ao-thun-05',
        size: ['s', 'm', 'l', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Summer Set Shirt 22',
        price_old: '299000',
        price: '349000',
        image01: product_102_image_01,
        image02: product_102_image_02,
        categorySlug: 'quan-tay',
        colors: ['white', 'red', 'blue'],
        slug: 'quan-02',
        size: ['s', 'm'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Birdie Stripped Shirt',
        price_old: '299000',
        price: '379000',
        image01: product_103_image_01,
        image02: product_103_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'red', 'orange', 'yellow'],
        slug: 'ao-so-mi-01',
        size: ['m'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Unum Shirt',
        price_old: '299000',
        price: '394000',
        image01: product_104_image_01,
        image02: product_104_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'orange', 'blue'],
        slug: 'ao-so-mi-02',
        size: ['xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Low Waist Skort',
        price_old: '299000',
        price: '294000',
        image01: product_105_image_01,
        image02: product_105_image_02,
        categorySlug: 'vay',
        colors: ['white', 'pink'],
        slug: 'vay-03',
        size: ['m', 's'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Split Midi Skirt',
        price_old: '299000',
        price: '499000',
        image01: product_106_image_01,
        image02: product_106_image_02,
        categorySlug: 'vay',
        colors: ['black'],
        slug: 'vay-04',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Paris Tee',
        price_old: '299000',
        price: '194000',
        image01: product_107_image_01,
        image02: product_107_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'orange', 'blue'],
        slug: 'ao-thun-01',
        size: ['l', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Dots Mini Skirt',
        price_old: '299000',
        price: '394000',
        image01: product_108_image_01,
        image02: product_108_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'red', 'black'],
        slug: 'ao-so-mi-03',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Pocket Mini Skirt',
        price_old: '299000',
        price: '494000',
        image01: product_109_image_01,
        image02: product_109_image_02,
        categorySlug: 'vay',
        colors: ['white', 'blue'],
        slug: 'vay-05',
        size: ['m'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Birdie Pants',
        price_old: '299000',
        price: '399000',
        image01: product_110_image_01,
        image02: product_110_image_02,
        categorySlug: 'quan',
        colors: ['blue', 'black'],
        slug: 'quan-01',
        size: ['l'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Bird Shirt 2022',
        price_old: '299000',
        price: '294000',
        image01: product_111_image_01,
        image02: product_111_image_02,
        categorySlug: 'ao-somi',
        colors: ['blue', 'black'],
        slug: 'ao-so-mi-04',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Mona Lis Blazer',
        price_old: '299000',
        price: '194000',
        image01: product_112_image_01,
        image02: product_112_image_02,
        categorySlug: 'ao-somi',
        colors: ['blue'],
        slug: 'ao-so-mi-05',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Compo Bodysuit',
        price_old: '299000',
        price: '189000',
        image01: product_113_image_01,
        image02: product_113_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'red'],
        slug: 'ao-thun-02',
        size: ['s', 'm', 'xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'Poet Shirt',
        price_old: '299000',
        price: '459000',
        image01: product_114_image_01,
        image02: product_114_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'blue'],
        slug: 'ao-so-mi-06',
        size: ['s', 'm'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    {
        title: 'plaid shorts',
        price_old: '299000',
        price: '399000',
        image01: product_115_image_01,
        image02: product_115_image_02,
        categorySlug: 'quan',
        colors: ['red', 'blue'],
        slug: 'quan-02',
        size: ['xl'],
        decription: 'Áo sơ mi nam form refined fit SSSTUTTER chất bamboo sơ vin linh hoạt FIT SHIRT',
        color_info: 'trắng be, vàng cát, đen, xanh mint, ghi nhạt',
        size_info: '0/1/2/3 tương ứng với S/M/L/XL ',
        material: 'vải bamboo (thoáng mát và không nhăn)',
        form: 'vải bamboo (thoáng mát và không nhăn)',
        origin: 'Việt Nam',
        gender: 'nu',
    },
    // 18 products
];

const getAllProducts = () => products;

const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
const getProductByGender = (gender) => products.filter((e) => e.gender === gender);
const getCartItemsDetail = (cartItems) => {
    let res = [];
    if (cartItems.length > 0) {
        cartItems.forEach((e) => {
            res.push({
                ...e,
                product: getProductBySlug(e.slug),
            });
        });
    }
    return res;
};

const productData = {
    getAllProducts,
    getProducts,
    getProductByGender,
    getProductBySlug,
    getCartItemsDetail,
};

export default productData;
