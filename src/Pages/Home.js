import React, { Component, useState } from 'react'
import Nav from './Utilidades/Nav';
import Publi from './Utilidades/Publi';
import { getFeed, getUserAuthId, getAvatarByUserId } from '../Service/Services'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publis: [],
      likes: [],
      meGusta: [],
      users: [],
      userAvatar: null,
      comments: [],
      userComments: [],
      userAuthId: null,
      cargando: true
    };
  }

  async componentDidMount() {
    console.log('mounted')
    
    const userAuthId = await getUserAuthId();
    const userAvatar = await getAvatarByUserId(userAuthId);

    const responseJson = await getFeed();

    this.setState({ publis: responseJson.publis, likes: responseJson.likes, cargando: false, meGusta: responseJson.meGusta, users: responseJson.users, images: responseJson.images, userAvatar: userAvatar, comments: responseJson.comments, userComments: responseJson.userComments, userAuthId: userAuthId, publisAvatar: responseJson.avatars })
  }

  async componentDidUpdate() {
    console.log('updated')

    const userAuthId = await getUserAuthId();
    const userAvatar = await getAvatarByUserId(userAuthId);

    const responseJson = await getFeed();

    this.setState({ publis: responseJson.publis, likes: responseJson.likes, cargando: false, meGusta: responseJson.meGusta, users: responseJson.users, images: responseJson.images, userAvatar: userAvatar, comments: responseJson.comments, userComments: responseJson.userComments, publisAvatar: responseJson.avatars });
  }

  render() {
    const { cargando, publis, likes, meGusta, users, images, userAvatar, comments, userComments, userAuthId, publisAvatar } = this.state

    return (
      <>
        <Nav userAvatar={userAvatar} userAuthId={userAuthId}/>
        <section>
          {
            publis.map((publi) =>
              <Publi
                publi={publi}
                likes = {likes[publi.id]}
                meGusta = {meGusta[publi.id]}
                user = {users[publi.user_id]}
                image = {images[publi.id]}
                comments = {comments[publi.id]}
                userComments = {userComments[publi.id]}
                userAvatar = {publisAvatar[publi.id]}
              />)
          }
        </section>
      </>
    )
  }
}



