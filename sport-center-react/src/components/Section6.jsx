const Review = () => {
    return (
        <section id="review">
            <div className="review-container">
                <div className="section-title">
                <h2>REVIEW CLIENT</h2>
                <hr className="line" />
                <p>
                    Lorem ipsum is not simply random text. It has roots in a piece of
                    classical at <br />
                    Hampden-Sydney College.
                </p>
                </div>
                <div className="client-container">
                <div className="reviewer">
                    <div className="client">
                    <img src="images/client1.jpg" className="client-image" />
                    <div className="client-info">
                        <h4>Diet Expert</h4>
                        <h6>CFO</h6>
                    </div>
                    </div>
                    <div className="comment">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed
                        nihil mollitia, sint molestias consequuntur natus iusto? Perferendis
                        eius explicabo laboriosam rerum esse. Voluptatibus possimus aut
                        omnis labore eum libero?
                    </p>
                    <div className="border" />
                    <div className="mirror-border" />
                    </div>
                </div>
                <div className="reviewer">
                    <div className="client">
                    <img src="images/client2.jpg" className="client-image" />
                    <div className="client-info">
                        <h4>Cardio Trainer</h4>
                        <h6>CEO</h6>
                    </div>
                    </div>
                    <div className="comment">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                        molestiae, saepe modi enim voluptates fugit labore ea dolore
                        delectus beatae omnis sunt officiis sequi perferendis quaerat
                        reiciendis. Animi, dolore eveniet.
                    </p>
                    <div className="border" />
                    <div className="mirror-border" />
                    </div>
                </div>
                </div>
            </div>
            </section>

    );
};

export default Review;