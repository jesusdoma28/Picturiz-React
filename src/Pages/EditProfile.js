import React, { Component } from 'react'
import Nav from './Utilidades/Nav';
import { getUserInfo, getUserAuthId, getAvatarByUserId, getUserAuthRole} from '../Service/Services';
import UserEditInfo from './Utilidades/UserEditInfo';


export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userAuthId: null,
            user: null,
            userAuthRole: '',
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
        const userAuthRole = await getUserAuthRole();

        const user = await getUserInfo(authUserId);
        console.log('user:');
        console.log(user);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user, userAuthRole: userAuthRole, cargando: false })
    }

    async componentDidUpdate() {
        console.log('updated');

        console.log('mounted');
        /* var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_id = urlParams.get('user_Id'); */

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);
        const userAuthRole = await getUserAuthRole();

        const user = await getUserInfo(authUserId);
        console.log('user:');
        console.log(user);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user, userAuthRole: userAuthRole })
    }

    render() {
        const { cargando, userAvatar, userAuthId, user, userAuthRole } = this.state;

        if (cargando == true) {
            return (
                <>
                    <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
                </>
            )
        }
        else {
            return (
                <>
                    <div className="bg-gray-100 h-screen">
                        <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
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