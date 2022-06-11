import React from 'react';
import PropTypes from 'prop-types';
import { deletePublication } from '../../Service/Services';

function DeleteButton(props) {
    const publication_id = props.publication_id;
    const userAuthId = props.userAuthId;
    const userId = props.userId;

    function deletePubli() {
        console.log('delete');
        console.log(publication_id);

        deletePublication(publication_id);
    }
    if (userAuthId == userId) {
        return (
            <button onClick={deletePubli} className="w-full bg-red-200 h-full grid place-items-center rounded">
                <img src="trash.svg" width="20px"></img>
            </button>
        );
    }
}

const PublicationPictureProfile = ({
    image,
    publicationId,
    userAuthId,
    userId
}) => (
    <>
        <div className="w-full grid place-items-center rounded h-full">
            <button onClick={() => window.location.href = './PublicationDetails?publication_id=' + publicationId}>
                <div className="w-full rounded hover:shadow-2xl grid place-items-center">
                    <img src={image}/>
                </div>
            </button>

            <DeleteButton publication_id={publicationId} userAuthId={userAuthId} userId={userId}></DeleteButton>
        </div>
    </>
)

PublicationPictureProfile.propTypes = {
    image: PropTypes.string.isRequired,
    publicationId: PropTypes.number.isRequired
}



export default PublicationPictureProfile;
