import React, { Component, useState } from 'react'
import Nav from './Utilidades/Nav';
import Publi from './Utilidades/Publi';
import { getFeed, getUserAuthId, getAvatarByUserId, getUserAuthRole } from '../Service/Services';
import { PropagateLoader } from 'react-spinners';
import { override } from '../Service/Constantes';


export default class Home extends React.PureComponent {
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
      userAuthRole: '',
      cargando: true
    };
  }

  async componentDidMount() {
    console.log('mounted')

    const userAuthId = await getUserAuthId();
    const userAvatar = await getAvatarByUserId(userAuthId);
    const userAuthRole = await getUserAuthRole();

    const responseJson = await getFeed();

    this.setState({ publis: responseJson.publis, likes: responseJson.likes, cargando: false, meGusta: responseJson.meGusta, users: responseJson.users, images: responseJson.images, userAvatar: userAvatar, comments: responseJson.comments, userComments: responseJson.userComments, userAuthId: userAuthId, publisAvatar: responseJson.avatars, userAuthRole: userAuthRole })
    console.log('mounted cargado');
  }

  async componentDidUpdate() {
    console.log('updated')

    const userAuthRole = await getUserAuthRole();

    const responseJson = await getFeed();

    this.setState({ publis: responseJson.publis, likes: responseJson.likes, meGusta: responseJson.meGusta, users: responseJson.users, images: responseJson.images, comments: responseJson.comments, userComments: responseJson.userComments, publisAvatar: responseJson.avatars, userAuthRole: userAuthRole })

    console.log('updated cargado')
  }

  render() {
    const { cargando, publis, likes, meGusta, users, images, userAvatar, comments, userComments, userAuthId, publisAvatar, userAuthRole } = this.state
    if (cargando == true) {
      return (
        <>
          <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole}/>

          <div className="sweet-loading min-h-screen flex h-screen justify-center items-center">
            <PropagateLoader color={'#4dbff0'} loading={cargando} css={override} size={15} />
          </div>
        </>
      )
    } else if (cargando == false) {
      return (
        <>
          <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
          <section>
            {
              publis.map((publi) =>
                <Publi key={publi.id}
                  publi={publi}
                  likes={likes[publi.id]}
                  meGusta={meGusta[publi.id]}
                  user={users[publi.user_id]}
                  image={images[publi.id]}
                  comments={comments[publi.id]}
                  userComm
                  ents={userComments[publi.id]}
                  userAvatar={publisAvatar[publi.id]}
                />)
            }
          </section>
        </>
      )
    }

  }
}



