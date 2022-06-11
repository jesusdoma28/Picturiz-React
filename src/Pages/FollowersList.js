import React, { Component } from 'react'
import Nav from './Utilidades/Nav';
import CardUser from './Utilidades/CardUser';
import { getUserAuthId, getAvatarByUserId, getUserFollowers, getUserAuthRole } from '../Service/Services';
import { PropagateLoader } from 'react-spinners';
import { override } from '../Service/Constantes';

export default class FollowersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userAuthId: null,
            followers: [],
            avatarsUsers: [],
            actualUser: null,
            userAuthRole: '',
            cargando: true
        };
    }

    async componentDidMount() {
        console.log('mounted');

        const userAuthId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(userAuthId);
        const userAuthRole = await getUserAuthRole();

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_idParam = urlParams.get('user_id');
        console.log('user_idParam:');
        console.log(user_idParam);
        var user_id = null;

        if (user_idParam != null && user_idParam != '' && user_idParam != 'null') {
            user_id = user_idParam;
        }
        else {
            user_id = userAuthId;
        }

        const followers = await getUserFollowers(user_id);

        this.setState({ cargando: false, userAvatar: userAvatar, userAuthId: userAuthId, followers: followers.users, avatarsUsers: followers.avatars, authFollowList: followers.authFollowList, actualUser: user_id, userAuthRole: userAuthRole });
    }

    async componentDidUpdate() {
        console.log('updated');

        const userAuthId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(userAuthId);
        const userAuthRole = await getUserAuthRole();

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_idParam = urlParams.get('user_id');
        console.log('user_idParam:');
        console.log(user_idParam);
        var user_id = null;

        if (user_idParam != null && user_idParam != '' && user_idParam != 'null') {
            user_id = user_idParam;
        }
        else {
            user_id = userAuthId;
        }

        const followers = await getUserFollowers(user_id);


        this.setState({ userAvatar: userAvatar, userAuthId: userAuthId, followers: followers.users, avatarsUsers: followers.avatars, authFollowList: followers.authFollowList, actualUser: user_id, userAuthRole: userAuthRole });
    }

    render() {
        const { cargando, userAvatar, userAuthId, followers, avatarsUsers, authFollowList, actualUser, userAuthRole } = this.state

        if (cargando == true) {
            return (
                <>
                    <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
                    <div className="sweet-loading min-h-screen flex h-screen justify-center items-center">
                        <PropagateLoader color={'#4dbff0'} loading={cargando} css={override} size={15} />
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="bg-gray-100 h-full">
                        <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
                        <div className="flex justify-center p-10 grid place-items-center h-80">
                            <button
                                type="button"
                                className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                onClick={() => window.location.href = './profile?user_id=' + actualUser}
                            >
                                Return to profile
                            </button>
                            <h1 className="font-extrabold">Followers</h1>

                            <div className="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                                <div className="">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 px-10">
                                        {
                                            followers.map((follower) =>
                                                <li className="py-3 sm:py-4">
                                                    <CardUser user={follower} avatar={avatarsUsers[follower.id]} follow={authFollowList[follower.id]} userAuthId={userAuthId} />
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}