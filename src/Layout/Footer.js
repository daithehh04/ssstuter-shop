import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../UI/Grid'
const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/about',
    },
    {
        display: 'Tuyển dụng',
        path: '/about',
    },
    {
        display: 'Tin tức',
        path: '/about',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about',
    },
];
const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className='wrapper'>
                    <Grid col={4} mdCol={2} smCol={1} gap={10}>
                        <div className='footer-item'>
                            <div className="footer-title">Tổng đài hỗ trợ</div>
                            <div className="footer-content">
                                <p>
                                    Liên hệ đặt hàng <strong>0123456789</strong>
                                </p>
                                <p>
                                    Thắc mắc đơn hàng <strong>0123456789</strong>
                                </p>
                                <p>
                                    Góp ý, khiếu nại <strong>0123456789</strong>
                                </p>
                            </div>
                        </div>
                        <div className='footer-item'>
                            <div className="footer-title">Về chúng tôi</div>
                            <div className="footer-content">
                                {footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className='footer-item'>
                            <div className="footer-title">Chăm sóc khách hàng</div>
                            <div className="footer-content">
                                {footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className='footer-item'>
                            <div className="footer-title">SSSTUTTER</div>
                            <div className="footer-content">
                                <p>
                                    Với thông điệp "Refined Life", SSStutter mong muốn đem đến cho khách hàng một lối sống
                                    tinh gọn bằng các sản phẩm thời trang tinh tế.
                                </p>
                            </div>
                        </div>
                    </Grid>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
