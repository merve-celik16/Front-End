const Purchases = () => {
    return (
        <section id="purchase">
            <div className="container">
                <div className="section-title">
                <h2>PURCHASE FROM US</h2>
                <hr className="line" />
                <p>
                    Lorem ipsum is not simply random text. It has roots in a piece of
                    classical at <br />
                    Hampden-Sydney College.
                </p>
                </div>
                <div className="card-images">
                <div className="purchase-container">
                    <img src="images/purchase1.jpg" alt="" />
                    <h4>Kettlebell / 5kg</h4>
                    <h6>
                    <span>89,95$</span> / 59,98$
                    </h6>
                    <div className="cart">
                    <i className="fa-solid fa-cart-shopping" />
                    <h6>Add To Cart</h6>
                    </div>
                </div>
                <div className="purchase-container">
                    <img src="images/purchase2.jpg" alt="" />
                    <h4>Treadmill</h4>
                    <h6>
                    <span>899,95$</span> / 599,98$
                    </h6>
                    <div className="cart">
                    <i className="fa-solid fa-cart-shopping" />
                    <h6>Add To Cart</h6>
                    </div>
                </div>
                <div className="purchase-container">
                    <img src="images/purchase3.jpg" alt="" />
                    <h4>Adjustable Dumbbell</h4>
                    <h6>
                    <span>89,95$</span> / 59,98$
                    </h6>
                    <div className="cart">
                    <i className="fa-solid fa-cart-shopping" />
                    <h6>Add To Cart</h6>
                    </div>
                </div>
                <div className="purchase-container">
                    <img src="images/purchase4.jpg" alt="" />
                    <h4>Kettlebell / 3kg</h4>
                    <h6>
                    <span>89,95$</span> / 59,98$
                    </h6>
                    <div className="cart">
                    <i className="fa-solid fa-cart-shopping" />
                    <h6>Add To Cart</h6>
                    </div>
                </div>
                </div>
            </div>
            </section>

    );
};

export default Purchases;