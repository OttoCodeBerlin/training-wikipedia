import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import CountryDetail from './CountryDetail'

import countries from './countries.json'

function App() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand>Countries Wiki</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            {countries.map((country, index) => {
              return (
                <div key={country.ccn3}>
                  <Card style={{ width: '18rem', margin: '10px' }}>
                    <Card.Body>
                      <Card.Title>
                        {country.flag} {country.name.common}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{country.name.official}</Card.Subtitle>
                      <Link to={`/countries/${country.cca3}`}>
                        <small>See Details</small>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </Col>
          <Col>
            <Switch>
              <Route exact path="/countries/:id" component={CountryDetail} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
