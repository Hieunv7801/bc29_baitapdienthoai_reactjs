import React, { Component } from 'react'
import dataPhone from '../Data/phoneList.json'
import ChiTietSanPham from './ChiTietSanPham'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'
export default class BaiTapDienThoai extends Component {
    state = {
        selectedPhone : dataPhone[0],
        cartList:[]
    }
    //* render sản phẩm
    selectPhone = (phone) => {
        this.setState({
            selectedPhone: phone,
        })
    }
    //* Thêm vào gio hàng
    addToCart = (phone) => {
        const data = [...this.state.cartList];

        const idx = data.findIndex((ele) => ele.maSP === phone.maSP);

        if(idx !== -1){
            data[idx].soLuong += 1;
        }else{
            data.push({
                ...phone,
                soLuong : 1
            });
        }
        this.setState({
            cartList: data
        })
    }
    //* tăng giảm số lượng 
    handleQuantity = (phone, isIncrease) => {
        const data = [...this.state.cartList];

        const idx = data.findIndex((ele) => ele.maSP === phone.maSP);

        if(idx === -1){
            alert("Không tìm thấy sản phẩm")
            throw new Error("Không tìm thấy sản phẩm")
        }
        if(isIncrease){
            data[idx].soLuong += 1;
        }else if(data[idx].soLuong > 1){
            data[idx].soLuong -= 1;
        }else if(window.confirm("Bạn có muốn xóa không ?")){
            data.splice(idx,1);
        }
        this.setState({
            cartList: data
        });
    } 
    deletePhone = (maSP) => {
        const data =[...this.state.cartList];

        const idx = data.findIndex(ele => ele.maSP === maSP)

        if(idx !== -1){
            data.splice(idx, 1);
        }
        //* cập nhật lại 
        this.setState({
            cartList: data
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <GioHang deletePhone = {this.deletePhone} handleQuantity= {this.handleQuantity} cartList={this.state.cartList}/>
                    <DanhSachSanPham  addToCart = {this.addToCart} selectPhone={this.selectPhone}/>
                    <ChiTietSanPham selectedPhone={this.state.selectedPhone}/>
                </div>
            </div>
        )
    }
}
