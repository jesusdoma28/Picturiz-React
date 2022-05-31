import React, { Component, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Nav from './Utilidades/Nav';
import Publi from './Utilidades/Publi';
import { getFeed } from '../Service/Services'

const baseUrl = "http://127.0.0.1:8000/api/publications";
const cookies = new Cookies();


export default class lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publis: [],
      likes: [],
      meGusta: [],
      users: [],
      cargando: true
    };
  }

  async componentDidMount() {
    console.log('mounted')

    const responseJson = await getFeed()
    console.log(responseJson);
    this.setState({ publis: responseJson.publis, likes: responseJson.likes, cargando: false, meGusta: responseJson.meGusta, users: responseJson.users })
    console.log(this.state.publis)
    console.log(this.state.likes)
  }

  render() {
    const { cargando, publis, likes, meGusta, users } = this.state

    console.log(meGusta);

    return (
      <>
        <Nav />
        <section>
          {
            publis.map((publi) =>
              <Publi
                publi={publi}
                likes = {likes[publi.id]}
                meGusta = {meGusta[publi.id]}
                user = {users[publi.user_id]}
              />)
          }
        </section>
      </>
    )
  }
}



