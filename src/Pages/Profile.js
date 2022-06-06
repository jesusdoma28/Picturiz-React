import React, { Component } from 'react';
import Nav from './Utilidades/Nav';
import { getUserInfo, getUserAuthId, getUserPublicationsAndImages, getUserFollowers, getUserFollowed, getAvatarByUserId, getFollow } from '../Service/Services';
import UserInfoProfile from './Utilidades/UserInfoProfile';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            userAvatar: null,
            userAuthId: null,
            user_id: null,
            publications: [],
            followers: [],
            followed: [],
            userPublicationsImages: [],
            follow: false,
            cargando: true
        };
    }

    async componentDidMount() {
        console.log('mounted')
        const userAuthId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(userAuthId);
        

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_idParam = urlParams.get('user_id');
        console.log('user_idParam:');
        console.log(user_idParam);

        if (user_idParam != null && user_idParam !== '' && user_idParam!='null') {
            var user_id = user_idParam;
        }
        else {
            var user_id = userAuthId;
        }
        console.log('user_id:');
        console.log(user_id);
        //var authUserId = urlParams.get('user_id');

        const userInfo = await getUserInfo(user_id);
        const publicationsAndImages = await getUserPublicationsAndImages(user_id);
        const followers = await getUserFollowers(user_id);
        const followed = await getUserFollowed(user_id);
        const follow = await getFollow(user_id);
        const avatarProfile = await getAvatarByUserId(user_id);
        console.log('follow bool:');
        console.log(follow);


        this.setState({ userInfo: userInfo, userAvatar: userAvatar, userAuthId: userAuthId, user_id: user_id, cargando: false, publications: publicationsAndImages.publications, userPublicationsImages: publicationsAndImages.images, followers: followers.users, followed: followed.users, follow: follow, avatarProfile: avatarProfile })
    }

    async componentDidUpdate() {
        console.log('updated')

        const userAuthId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(userAuthId);

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_idParam = urlParams.get('user_id');
        console.log('user_idParam:');
        console.log(user_idParam);
        var user_id = null;

        if (user_idParam != null && user_idParam != '' && user_idParam!='null') {
            user_id = user_idParam;
        }
        else {
            user_id = userAuthId;
        }
        //var authUserId = urlParams.get('user_id');

        const userInfo = await getUserInfo(user_id);
        const publicationsAndImages = await getUserPublicationsAndImages(user_id);
        const followers = await getUserFollowers(user_id);
        const followed = await getUserFollowed(user_id);
        const follow = await getFollow(user_id);
        const avatarProfile = await getAvatarByUserId(user_id);
        console.log('follow bool:');
        console.log(follow);



        this.setState({ userInfo: userInfo, userAvatar: userAvatar, userAuthId: userAuthId, user_id: user_id, publications: publicationsAndImages.publications, userPublicationsImages: publicationsAndImages.images, followers: followers.users, followed: followed.users, follow: follow, avatarProfile: avatarProfile })
    }

    render() {
        const { cargando, userAvatar, userAuthId, userInfo, publications, userPublicationsImages, followers, followed, follow, avatarProfile } = this.state;

        /* console.log('userInfo:');
        console.log(userInfo); */
        /* console.log('Publications:')
        console.log(publications); */
        /* console.log('publications size:');
        console.log(publications.length);
        console.log('followers size:');
        console.log(followers);
        console.log('followed size:');
        console.log(followed); */


        if (cargando == true) {
            return (
                <Nav userAvatar={userAvatar} userAuthId={userAuthId} />
            )
        }
        else {
            return (
                <>
                    <div class="bg-gray-100 h-full h-screen">
                        <Nav userAvatar={userAvatar} userAuthId={userAuthId} />

                        <UserInfoProfile user={userInfo} userAvatar={avatarProfile} publications={publications} numPost={publications.length} numFollowers={followers.length} numFollowed={followed.length} userPublicationsImages={userPublicationsImages} userAuthId={userAuthId} follow={follow} ></UserInfoProfile>
                    </div>
                </>
            )
        }


    }
}