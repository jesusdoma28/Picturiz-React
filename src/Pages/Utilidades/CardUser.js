import React from 'react';
import PropTypes from 'prop-types';
import { changeFollow } from '../../Service/Services';


function ShowFollowUnfollow(props) {
    const userAuthId = props.userAuthId;
    const userId = props.userId;
    const follow = props.follow;
    console.log(userId);

    async function changeFollowUser() {
        const responseJson = await changeFollow(userId, follow);
        console.log('changeFollowUser:');
        console.log(responseJson);
    }

    if (userAuthId !== userId) {
        if (follow == false) {
            return (
                <div className="px-8 py-1 border-2 border-indigo-600 bg-red-600 rounded-full text-gray-50 font-semibold" >Not Following</div>
            );
        }
        else if (follow == true) {
            return (
                <div className="px-8 py-1 border-2 border-indigo-600 bg-green-600 rounded-full text-gray-50 font-semibold" >Following</div>
            );
        }
    }
}

const CardUser = ({
    user,
    avatar,
    follow,
    userAuthId
}) => (
    <>
        <div className="flex items-center space-x-4">
            <div className="cursor-pointer" onClick={() => window.location.href = './profile?user_id=' + user.id}>
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={avatar}></img>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.name} {user.last_name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.username}
                    </p>
                </div>
            </div>
            <div className="flex justify-end w-full">
                <ShowFollowUnfollow userAuthId={userAuthId} userId={user.id} follow={follow}></ShowFollowUnfollow>
            </div>
        </div>

    </>

)

CardUser.propTypes = {
    user: PropTypes.object.isRequired,
    avatar: PropTypes.string.isRequired,
    userAuthId: PropTypes.number.isRequired,
    follow: PropTypes.bool.isRequired
}

export default CardUser;
