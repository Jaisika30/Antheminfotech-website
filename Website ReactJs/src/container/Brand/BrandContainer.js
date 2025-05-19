import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
// import BrandData from "../../data/brand/brand.json";
import Brand from "../../components/Brand/Brand.jsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import SectionTitle from "../../components/SectionTitles/SectionTitle.jsx";
import useBrandAPI from "../../data/brand/BrandAPI.js";
import { getClients } from "../../services/clientsservice.js";
import { getToken } from "../../services/tokenservice.js";
import Loader from "../Loader/Loader.jsx";

const BrandContainer = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchClients = async () => {
        try {
          const data = await getClients();
          const modifiedClients = data.map((client) => ({
            ...data,
            // logo1: `${process.env.REACT_APP_PUBLIC_URL_CONTENT}/ClientImages/${client.logo1}`,
            logo1: `${process.env.REACT_APP_PUBLIC_URL}/images/our-clients/${client.logo1}`,
            logo2: `${process.env.REACT_APP_PUBLIC_URL_CONTENT}/ClientImages/${client.logo2}`,
          }));
          setBrandData(modifiedClients);
        } catch (err) {
          console.error(err.message);
        } finally {
          setLoading(false);
        }
      };
      setLoading(true);
      fetchClients();
    }
  }, [token]);

  const sliderOptions = {
    spaceBetween: 30,
    slidesPerView: 6,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 2,
      },
    },
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`brand-section section ${classOption}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="brand-wrapper">
              <div className="brand-list">
                <Swiper className="brand-carousel" options={sliderOptions}>
                  {brandData &&
                    brandData.map((single, key) => {
                      return (
                        <SwiperSlide key={key}>
                          <Brand data={single} key={key} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandContainer.propTypes = {
  classOption: PropTypes.string,
};
BrandContainer.defaultProps = {
  classOption: "brand-section section section-padding-bottom",
};

export default BrandContainer;
