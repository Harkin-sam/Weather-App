import React from 'react'
import classes from './TopButtons.module.css'

function TopButtons() {

    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        }
    ]


  return (
    <div className = {classes.TopButtons}>{cities.map(city => {

       return <button key = {city.id}>{city.title}</button>
    })}</div>
  )
}

export default TopButtons