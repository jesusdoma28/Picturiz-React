import React, { Component } from 'react'
import Nav from './Utilidades/Nav';
import { getUserInfo, getUserAuthId, getAvatarByUserId} from '../Service/Services';
import UserEditInfo from './Utilidades/UserEditInfo';


export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userAuthId: null,
            user: null,
            cargando: true
        };
    }

    async componentDidMount() {
        console.log('mounted');
        /* var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_id = urlParams.get('user_Id'); */

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);

        const user = await getUserInfo(authUserId);
        console.log('user:');
        console.log(user);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user, cargando: false })
    }

    async componentDidUpdate() {
        console.log('updated');

        console.log('mounted');
        /* var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_id = urlParams.get('user_Id'); */

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);

        const user = await getUserInfo(authUserId);
        console.log('user:');
        console.log(user);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user })
    }

    render() {
        const { cargando, userAvatar, userAuthId, user } = this.state;

        if (cargando == true) {
            return (
                <>
                    <Nav userAvatar={userAvatar} userAuthId={userAuthId} />
                </>
            )
        }
        else {
            return (
                <>
                    <div class="bg-gray-100 h-screen">
                        <Nav userAvatar={userAvatar} userAuthId={userAuthId} />
                        <UserEditInfo
                            user={user}
                            userAvatar={userAvatar}
                        />
                    </div>
                </>
            )
        }


    }
}