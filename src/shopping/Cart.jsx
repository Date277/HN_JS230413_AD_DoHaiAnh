import React from "react";
import "./Style.css";
function Cart({ updateQuantity, clearCart, calculateTotalPrice, cartItems }) {
  return (
    <div>
      <div className="cart">
        <h1>CART</h1>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá tiền</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image_url} alt={item.name} width={"50px"} />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>{item.totalPrice}$</td>
                <td>
                  <button className="btn-del" onClick={() => clearCart(item)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Tổng tiền phải thanh toán: {calculateTotalPrice()}$</h2>
      </div>
    </div>
  );
}

export default Cart;
