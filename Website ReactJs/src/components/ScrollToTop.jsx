import React, { useState, useEffect } from 'react';

const ScrollToTop = (props) => {
  const [stick, setStick] = useState(false)
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    var position = window.pageYOffset

    const scrollHandler = () => {
      let scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos
    }




    window.addEventListener('scroll', function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener('scroll', function () {
        scrollHandler();
      });
    }
  }, [stick]);



  return (
    <button type="button" className={`scroll-top ${stick ? "show" : ""}`} onClick={onClickHandler} {...props}>
      {/* <i className="arrow-top pe-7s-angle-up"></i>
      <i className="arrow-bottom pe-7s-angle-up"></i> */}
      <i className="fa-solid fa-chevron-up"></i>

    </button>
  )
}

export default ScrollToTop