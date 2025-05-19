import PropTypes from "prop-types";
import React, { useEffect } from 'react';
import ReactVivus from 'react-vivus';

const ContactInfoItem = ({ data }) => {
    useEffect(() => {
        const equalizeHeights = () => {
            const divs = document.querySelectorAll('.contact-info');
            let maxHeight = 0;

            divs.forEach(div => {
                const height = div.offsetHeight;
                if (height > maxHeight) maxHeight = height;
            });

            divs.forEach(div => {
                div.style.height = `${maxHeight}px`;
            });
        };

        equalizeHeights();
        window.addEventListener('resize', equalizeHeights);

        return () => window.removeEventListener('resize', equalizeHeights);
    }, []);
    return (
        <div style={{ height: "fit-content" }}>
            <div className="contact-info h-100">
                <div className="icon">
                    <ReactVivus
                        id={`contactsvg-${data.id}`}
                        option={{
                            file: `${process.env.REACT_APP_PUBLIC_URL}${data.icon}`,
                            animTimingFunction: 'EASE',
                            type: 'oneByOne',
                            delay: 80
                        }}
                    />
                </div>
                <div className="info">
                    <h4 className="title">{data.title}</h4>
                    <span className="info-text" dangerouslySetInnerHTML={{ __html: data.info }} />
                </div>
            </div>
        </div>
    )
}

ContactInfoItem.propTypes = {
    data: PropTypes.object
};

export default ContactInfoItem;
