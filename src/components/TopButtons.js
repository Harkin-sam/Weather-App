import React from "react";
import gsap from "gsap";
import london from './images/london.webp'
import paris from './images/paris.webp'
import sydney from './images/sydney.webp'
import Tokyo from './images/Tokyo.webp'
import toronto from './images/toronto.webp'

function TopButtons(props) {

  const cities = [
    {
      id: 1,
      title: "London",
      images: london
    },
    {
      id: 2,
      title: "Sydney",
      images: sydney
    },
    {
      id: 3,
      title: "Tokyo",
      images: Tokyo
    },
    {
      id: 4,
      title: "Toronto",
      images: toronto
    },
    {
      id: 5,
      title: "Paris",
      images: paris
    },
  ];


  const handleCity = city =>{
  gsap.to(props.forwardedRef.current, {
    duration: 0,
    opacity: 1,
    background: `url(${city}) center center`
  })

  gsap.to(props.forwardedRef.current, {
    duration: 0.4,
    opacity: 1,
    ease: 'power3.inOut'
  })

  gsap.from(props.forwardedRef.current, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top"
  })
  }

  const handleCityReturn = () => {
    gsap.to(props.forwardedRef.current, {
      duration: 0.4,
      opacity: 0,
      ease: 'power3.inOut'
    })
  }
  
  const topButtonClickHandler = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget.innerHTML)
        props.onAddQuery(e.currentTarget.innerHTML)
  }

  return (
    <div className='TopButtons'>
      {cities.map((city) => {

        return (
          <button key={city.id} onClick={topButtonClickHandler} onMouseEnter={()=>handleCity(city.images)} onMouseOut={handleCityReturn}>
            {city.title}
          </button>
        );

      })}
    </div>
  );
}

export default TopButtons;
