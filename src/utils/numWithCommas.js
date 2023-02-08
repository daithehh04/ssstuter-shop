const numWithCommas = (x) => {
    const num = "" + x;
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export default numWithCommas;