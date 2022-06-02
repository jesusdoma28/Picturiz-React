import React, { Component, useState } from 'react'
import Nav from './Utilidades/Nav';
import Publi from './Utilidades/Publi';
import { getAvatar, getUserInfo, getUserAuthId } from '../Service/Services'
import UserInfoProfile from './Utilidades/UserInfoProfile';


export default class lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            userAvatar: null,
            userAuthId: null,
            cargando: true
        };
    }

    async componentDidMount() {
        console.log('mounted')

        const userAvatar = await getAvatar();
        const AuthUserID = await getUserAuthId();
        const userInfo = await getUserInfo(AuthUserID);

        this.setState({ userInfo: userInfo, userAvatar: userAvatar, userAuthId: AuthUserID })
    }

    async componentDidUpdate() {
        console.log('updated')

        const userAvatar = await getAvatar();
        const AuthUserID = await getUserAuthId();
        const userInfo = await getUserInfo(AuthUserID);


        this.setState({ userInfo: userInfo, userAvatar: userAvatar, userAuthId: AuthUserID })
    }

    render() {
        const { cargando, userAvatar, userAuthId, userInfo } = this.state;

        console.log('userInfo:');
        console.log(userInfo);

        return (
            <>
                <Nav userAvatar={userAvatar} userAuthId={userAuthId} />

                <UserInfoProfile user={userInfo} userAvatar={userAvatar}></UserInfoProfile>
            </>
        )
    }
}