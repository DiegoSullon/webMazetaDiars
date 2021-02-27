import React from 'react';
function ProductCard({image, title,price,description}) {
    return (
        <div className="col-md-3 col-6 product-block">

            <a href="/wacom-tablet"><img className="img-fluid img-portfolio img-hover mb-3" src={image} alt="imagen producto" /></a>
            <div className="caption">
                <h3><a href="/wacom-tablet">{title}</a></h3>
                <div className="price-mob">
                    {price} PEN
                </div>
                <div className="clearfix"></div>
                <p className="product-block-description d-none d-md-block">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProductCard
