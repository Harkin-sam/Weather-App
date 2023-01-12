import React from "react";

function TopButtons(props) {

  
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  

  const topButtonClickHandler = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.innerHTML)
    props.onAddQuery(e.currentTarget.innerHTML);
  };

  return (
    <div className="TopButtons">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            onClick={topButtonClickHandler}  
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;

