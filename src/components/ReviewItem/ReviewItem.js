import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,img,key} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h2 className="product-name">name : {name}</h2>
            <h2>price : {price}</h2>
            <h2>quantity : {quantity}</h2>
            <button className="btn-regular" onClick={()=> props.handleRemove(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;