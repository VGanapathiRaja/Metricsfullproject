import React, { Component } from 'react'
import Herosection from '../Pages/Herosection'
import Passionsection from '../Pages/Passionsection'
import Contactquestionsection from '../Pages/Contactquestionsection'
import Servicessection from '../Pages/Servicessection'
import Contactsection from '../Pages/Contactsection'
import Subscribesection from '../Pages/Subscribesection'
import Signin from '../Pages/Signinsec'

export default class Homemenu extends Component {
  render() {
    return (
      <>
        <Herosection/>
        <Passionsection/>
        <Contactquestionsection/>
        <Signin/>
        <Servicessection/>
        <Contactsection/>
        <Subscribesection/>
      </>
    )
  }
}
