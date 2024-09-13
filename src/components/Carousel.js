import './Carousel.css'
import img from '../images/pexels-ssteenbergenn-2966315.jpg'

const Carousel1 = () => {
    return (
        <div className='carousel-container'>
            {/* Background Image */}
            <div className='carousel-img'>
                <img src={img} alt='Carousel Background' />
            </div>

            {/* Carousel Content */}
            <div className="carousel-content">
                <h1 className="carousel-title">Welcome to Our Website</h1>
                <p className="carousel-text">Explore our services and find out how we can help you succeed.</p>
                <div className="carousel-buttons">
                    <button className="btn-primary">Learn More</button>
                    <button className="btn-secondary">Get Started</button>
                </div>
            </div>

           
        </div>
    )
}

export default Carousel1;
