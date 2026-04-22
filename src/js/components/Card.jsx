const Card = () => {
    return (
        <div className="card">
            <img src="https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Título</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique in nulla at ultrices. Phasellus sagittis, arcu non tempor rutrum, elit leo hendrerit libero, vel vulputate purus enim a felis. Phasellus facilisis et sem sed hendrerit. Nunc tristique tortor ac lacus molestie cursus. Duis quis urna leo. Nulla molestie tellus.</p>
            </div>
        </div>
    );
};

export default Card;