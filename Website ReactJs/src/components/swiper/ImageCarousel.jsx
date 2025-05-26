import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = ({ imageUrls }) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        const circle = progressCircle.current;
        if (circle) {
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            circle.style.strokeDasharray = `${circumference}`;
            circle.style.strokeDashoffset = `${circumference * (1 - progress)}`;
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    // Check if imageUrls is defined and is an array
    if (!imageUrls || !Array.isArray(imageUrls)) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    return (
        <Container className="mt-4">
            <Swiper
                lazy={true}
                preloadImages={false}
                watchSlidesVisibility={true}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                style={{ height: '60vh', position: 'relative' }} // Ensure Swiper is relatively positioned
            >
                {imageUrls.map((url, index) => (
                    <SwiperSlide
                        className='background-1'
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#000',
                            position: 'relative', // Ensure SwiperSlide is relatively positioned
                        }}
                    >
                        <img
                            src={`${process.env.REACT_APP_PUBLIC_URL_CONTENT}/PortfolioImages/${url?.imageURL}`}
                            alt={`Slide ${index + 1}`}
                            style={{

                                height: '100%',
                            }}
                        />
                    </SwiperSlide>
                ))}

                {/* Autoplay progress circle */}
                <div
                    className="autoplay-progress"
                    slot="container-end"
                    style={{
                        position: 'absolute',
                        top: '10px', // Adjust position
                        right: '10px',
                        width: '48px',
                        height: '48px',
                        zIndex: '10', // Ensure it's on top of images
                    }}
                >
                    <svg viewBox="0 0 48 48" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                        <circle
                            ref={progressCircle}
                            cx="24"
                            cy="24"
                            r="20"
                            style={{
                                fill: 'none',
                                stroke: '#000',
                                strokeWidth: '4',
                                strokeDasharray: '126',
                                strokeDashoffset: '126',
                                transition: 'stroke-dashoffset 0.25s linear',
                            }}
                        />
                    </svg>
                    <span
                        ref={progressContent}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '14px',
                            color: '#000',
                        }}
                    ></span>
                </div>
            </Swiper>
        </Container>
    );
};

export default ImageCarousel;
