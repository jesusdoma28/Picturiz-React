import React from 'react';
import PropTypes from 'prop-types';


const PublicationPictureProfile = ({
    image,
    publicationId
}) => (
    <button onClick={() => window.location.href = './PublicationDetails?publication_id=' + publicationId}>
        <div class="w-full rounded hover:shadow-2xl grid place-items-center">
            <img src={image}
                alt="image" />
        </div>
    </button>
)

PublicationPictureProfile.propTypes = {
    image: PropTypes.string.isRequired,
    publicationId: PropTypes.number.isRequired
}



export default PublicationPictureProfile;
