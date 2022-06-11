import React, { Component } from 'react'
import Nav from './Utilidades/Nav';
import CardUser from './Utilidades/CardUser';
import { getUserAuthId, getAvatarByUserId, getUserFollowed, getUserAuthRole } from '../Service/Services'


export default class FollowedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userAuthId: null,
            followeds: [],
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

        const followeds = await getUserFollowed(user_id);

        this.setState({ cargando: false, userAvatar: userAvatar, userAuthId: userAuthId, followeds: followeds.users, avatarsUsers: followeds.avatars, authFollowList: followeds.authFollowList, actualUser: user_id, userAuthRole: userAuthRole });
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

        const followeds = await getUserFollowed(user_id);


        this.setState({ userAvatar: userAvatar, userAuthId: userAuthId, followeds: followeds.users, avatarsUsers: followeds.avatars, authFollowList: followeds.authFollowList, actualUser: user_id, userAuthRole: userAuthRole });
    }

    render() {
        const { cargando, userAvatar, userAuthId, followeds, avatarsUsers, authFollowList, actualUser, userAuthRole } = this.state
        console.log('authfollowList');
        console.log(authFollowList);

        if (cargando == true) {
            return (
                <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
            )
        }
        else {
            return (
                <>
                    <div className="bg-gray-100 h-full">
                        <Nav userAvatar={userAvatar} userAuthId={userAuthId} />
                        <div className="flex justify-center p-10 grid place-items-center h-80">
                            <button
                                type="button"
                                className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                onClick={() => window.location.href = './profile?user_id=' + actualUser}
                            >
                                Return to profile
                            </button>
                            <h1 className="font-extrabold">Following users</h1>
                            <div className="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <div className="">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 px-10">
                                        {
                                            followeds.map((followed) =>
                                                <li className="py-3 sm:py-4">
                                                    <CardUser user={followed} avatar={avatarsUsers[followed.id]} follow={authFollowList[followed.id]} userAuthId={userAuthId} />
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