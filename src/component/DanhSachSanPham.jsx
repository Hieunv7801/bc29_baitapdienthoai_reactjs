import React, { Component } from 'react'
import dataPhone from '../Data/phoneList.json'
import DienThoai from './DienThoai'

export default class DanhSachSanPham extends Component {
    renderListPhone = () => {
        return dataPhone.map((ele) => {
            return(
                <DienThoai 
                addToCart = {this.props.addToCart}
                selectPhone={this.props.selectPhone} key={ele.maSP} phone={ele}/>
            )
        })
    }
    render() {
        return (
            <div>
                <h4>PRODUCT LIST</h4>
                <div className="row">
                    {this.renderListPhone()}
                </div>
            </div>
        )
    }
}
