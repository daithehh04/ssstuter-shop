
const url = 'https://provinces.open-api.vn/api/';

export const apiGetProvinces = async () => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const data = await response.json();
    return data
}

export const apiGetDistrict = async (code) => {
    const response = await fetch(url + `p/${code}?depth=2`);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const data = await response.json();
    return data.districts
}

export const apiGetWards = async (code) => {
    const response = await fetch(url + `d/${code}?depth=2`);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const data = await response.json();
    return data.wards
}