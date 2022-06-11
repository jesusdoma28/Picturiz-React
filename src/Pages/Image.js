import React, { Component } from 'react'
import Nav from './Utilidades/Nav';
import { getUserInfo, getUserAuthId, getAvatarByUserId, getPublicationAndImageById, getLikesOfPublicationById, getCommentsAndUsersByPublicationId, getUserAuthRole } from '../Service/Services'
import Publi from './Utilidades/Publi';


export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userAuthId: null,
            image: null,
            publication: null,
            imageAvatar: null,
            userLiked: null,
            likes: null,
            user: null,
            comments: [],
            userComments: [],
            userAuthRole: '',
            cargando: true
        };
    }

    async componentDidMount() {
        console.log('mounted');
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var publication_id = urlParams.get('publication_id');

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);
        const userAuthRole = await getUserAuthRole();
        const publicationAndImage = await getPublicationAndImageById(publication_id);
        const imageAvatar = await getAvatarByUserId(publicationAndImage.publication.user_id);

        const likes = await getLikesOfPublicationById(publication_id);

        const user = await getUserInfo(publicationAndImage.publication.user_id);
        console.log('user:');
        console.log(user);

        const commentsAndUser = await getCommentsAndUsersByPublicationId(publication_id);


        console.log('publication_id:');
        console.log(publication_id);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, image: publicationAndImage.image, publication: publicationAndImage.publication, imageAvatar: imageAvatar, userLiked: likes.meGusta, likes: likes.likes, user: user, comments: commentsAndUser.comments, userComments: commentsAndUser.userComments, userAuthRole: userAuthRole, cargando: false })
    }

    async componentDidUpdate() {
        console.log('updated');

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var publication_id = urlParams.get('publication_id');

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);
        const userAuthRole = await getUserAuthRole();
        const publicationAndImage = await getPublicationAndImageById(publication_id);
        const imageAvatar = await getAvatarByUserId(publicationAndImage.publication.user_id);

        const likes = await getLikesOfPublicationById(publication_id);

        const user = await getUserInfo(publicationAndImage.publication.user_id);

        const commentsAndUser = await getCommentsAndUsersByPublicationId(publication_id);
        console.log('user:');
        console.log(user);

        console.log('publication_id:');
        console.log(publication_id);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, image: publicationAndImage.image, publication: publicationAndImage.publication, imageAvatar: imageAvatar, userLiked: likes.meGusta, likes: likes.likes, user: user, comments: commentsAndUser.comments, userComments: commentsAndUser.userComments, userAuthRole: userAuthRole })
    }

    render() {
        const { cargando, userAvatar, userAuthId, image, publication, imageAvatar, likes, userLiked, user, comments, userComments, userAuthRole } = this.state;

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
                        <Publi
                            publi={publication}
                            likes={likes}
                            meGusta={userLiked}
                            user={user}
                            image={image}
                            comments={comments}
                            userComments={userComments}
                            userAvatar={imageAvatar}
                        />
                    </div>
                </>
            )
        }


    }
}