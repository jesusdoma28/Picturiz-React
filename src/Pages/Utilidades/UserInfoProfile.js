import React from 'react';
import PublicationPictureProfile from './PublicationPictureProfile';
import { changeFollow } from '../../Service/Services';

function ShowEditProfile(props) {
  const userAuthId = props.userAuthId;
  const userId = props.userId;
  if (userAuthId == userId) {
    return (
      <span class="text-base font-semibold text-gray-700 mr-2">
        <button
          class="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded"
          onClick={() => window.location.href = './editProfile?user_id=' + userAuthId}
        >Edit Profile</button>
      </span>
    );
  }
}

function ShowFollowUnfollow(props) {
  const userAuthId = props.userAuthId;
  const userId = props.userId;
  const follow = props.follow;

  async function changeFollowUser() {
    const responseJson = await changeFollow(userId, follow);
    console.log('changeFollowUser:');
    console.log(responseJson);
  }

  if (userAuthId != userId) {
    if (follow == true) {
      return (
        <span class="text-base font-semibold text-gray-700 mr-2">
          <button
            class="bg-red-500 text-white font-semibold py-2 px-4 border border-gray-600 hover:border-transparent rounded"
            onClick={changeFollowUser}
          >Unfollow</button>
        </span>
      );
    }
    else if (follow == false) {
      return (
        <span class="text-base font-semibold text-gray-700 mr-2">
          <button
            class="bg-green-500 text-white font-semibold py-2 px-4 border border-gray-600 hover:border-transparent rounded"
            onClick={changeFollowUser}
          >Follow</button>
        </span>
      );
    }
  }
}

const UserInfoProfile = ({
  userAvatar,
  user,
  publications,
  numPost,
  numFollowers,
  numFollowed,
  userPublicationsImages,
  userAuthId,
  follow
}) => (
  <>
    <div class="bg-gray-100 h-full h-screen px-48 mb-15">
      <div class="flex md:flex-row-reverse flex-wrap">
        <div class="w-full md:w-3/4 p-4 text-center">
          <div class="text-left pl-4 pt-3">
            <span class="text-base text-gray-700 text-2xl mr-2">{user.username}</span>
            <ShowEditProfile userAuthId={userAuthId} userId={user.id}></ShowEditProfile>
            <ShowFollowUnfollow userAuthId={userAuthId} userId={user.id} follow={follow}></ShowFollowUnfollow>
          </div>

          <div class="text-left pl-4 pt-3">
            <span class="text-base font-semibold text-gray-700 mr-2">
              <b>{numPost}</b> posts
            </span>
            <span class="text-base font-semibold text-gray-700 mr-2">
              <b>{numFollowers}</b> followers
            </span>
            <span class="text-base font-semibold text-gray-700">
              <b>{numFollowed}</b> following
            </span>
          </div>

          <div class="text-left pl-4 pt-3">
            <span class="text-lg font-bold text-gray-700 mr-2">{user.name} {user.last_name}</span>
          </div>

          <div class="text-left pl-4 pt-3">
            <p
              class="text-base font-medium text-gray-700 mr-2"
            >{user.info}</p>
          </div>
        </div>

        <div class="w-full md:w-1/4 p-4 text-center">
          <div class="w-full relative md:w-3/4 text-center mt-8">
            <button
              class="flex rounded-full"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <img
                class="h-40 w-40 rounded-full"
                src={userAvatar}
                alt
              />
            </button>
          </div>
        </div>
      </div>

      <hr class="border-gray-500 mt-6" />

      {/* <!--post icon and title--> */}
      <div class="flex flex-row mt-4 justify-center mr-16">

        <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div class="flex inline-flex ml-2 mt-1">
            <h3 class="text-sm font-bold text-gray-800 mr-2">POSTS</h3>
          </div>
        </div>

        {/* <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div class="flex inline-flex">
            <button
              class="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <div class="flex inline-flex ml-2 mt-1">
            <h3 class="text-sm font-medium text-gray-700 mr-2">IGTV</h3>
          </div>
        </div>

        <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div class="flex inline-flex">
            <button
              class="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
          <div class="flex inline-flex ml-2 mt-1">
            <h3 class="text-sm font-medium text-gray-700 mr-2">SAVED</h3>
          </div>
        </div>

        <div class="flex text-gray-700 text-center py-2 m-2 pr-5">
          <div class="flex inline-flex">
            <button
              class="border-transparent text-gray-600 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </button>
          </div>
          <div class="flex inline-flex ml-2 mt-1">
            <h3 class="text-sm font-medium text-gray-700 mr-2">TAGGED</h3>
          </div>
        </div> */}
      </div>

      {/* <!--post images--> */}

      <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        {
          publications.map((publication) =>
            <PublicationPictureProfile image={userPublicationsImages[publication.id]} publicationId={publication.id} userAuthId={userAuthId} userId={user.id} />
          )
        }
      </div>

    </div>
  </>
)

UserInfoProfile.propTypes = {

}



export default UserInfoProfile
