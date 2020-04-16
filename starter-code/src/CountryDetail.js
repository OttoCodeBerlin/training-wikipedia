import React from 'react'
import { Link } from 'react-router-dom'
import countries from './countries.json'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function CountryDetail(props) {
  const findCountry = (id) => {
    return countries.find((el) => el.cca3 === id)
  }

  const foundCountry = findCountry(props.match.params.id)

  return (
    <Jumbotron style={{ margin: '10px' }}>
      <h1>{foundCountry.name.common}</h1>
      <p>{foundCountry.name.official}</p>
      <hr />
      <p>Capital: {foundCountry.capital}</p>
      <hr />
      <p>Area: {foundCountry.area} km&sup2;</p>
      <hr />
      <p style={{ paddingBottom: '15px' }}>
        Borders:
        <br />
        {foundCountry.borders.map((country, index) => {
          return (
            <Link key={index} to={`/countries/${country}`}>
              <Button style={{ margin: '5px' }} variant="primary" size="sm">
                {country}
              </Button>
            </Link>
          )
        })}
      </p>
    </Jumbotron>
  )
}
