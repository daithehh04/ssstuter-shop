import React, { useEffect, useState } from 'react'
import { apiGetDistrict, apiGetProvinces, apiGetWards } from '../api/address'

const Address = () => {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [provinceCode, setProvinceCode] = useState()
    const [districtCode, setDistrictCode] = useState()
    useEffect(() => {
        const fetchApiProvince = async () => {
            const response = await apiGetProvinces()
            setProvinces(response)
        }
        fetchApiProvince()
    }, [])

    useEffect(() => {
        const fetchApiDistrict = async () => {
            const response = await apiGetDistrict(provinceCode)
            setDistricts(response)
        }
        provinceCode && fetchApiDistrict(provinceCode)
    }, [provinceCode])

    useEffect(() => {
        const fetchApiWards = async () => {
            const response = await apiGetWards(districtCode)
            setWards(response)
        }
        districtCode && fetchApiWards(districtCode)
    }, [districtCode])
    return (
        <form className="address">
            <select name="" id="province" value={provinceCode} onChange={e => setProvinceCode(e.target.value)} className="address-item">
                <option value="">Chọn địa chỉ</option>
                {provinces.map(item => (
                    <option key={item?.code} value={item?.code}>{item?.name}</option>
                ))}
            </select>
            <select name="" id="district" value={districtCode} onChange={e => setDistrictCode(e.target.value)} className="address-item">
                <option value="">Chọn địa chỉ</option>
                {districts.map(item => (
                    <option key={item?.code} value={item?.code}>{item?.name}</option>
                ))}
            </select>
            <select name="" id="ward" className="address-item">
                <option value="">Chọn địa chỉ</option>
                {wards.map(item => (
                    <option key={item?.code} value={item?.code}>{item?.name}</option>
                ))}
            </select>
        </form>
    )
}

export default Address