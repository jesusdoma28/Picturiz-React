import React from 'react';
import PropTypes from 'prop-types';
import { changeMeGusta, createComment } from '../../Service/Services'

var mostrar = false;

function MgButton(props) {
  var meGusta = props.meGusta;
  var publi_id = props.publi_id;

  async function darQuitarMeGusta() {
    if (meGusta == true) {
      await changeMeGusta(meGusta, publi_id);
      meGusta = false;

    } else if (meGusta == false) {
      await changeMeGusta(meGusta, publi_id);
      meGusta = true
    }
  }

  return (
    <button onClick={darQuitarMeGusta}>
      <MeGustaCorazon meGusta={meGusta} />
    </button>
  );

};

function MeGustaCorazon(props) {
  const meGusta = props.meGusta;
  if (meGusta == true) {
    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1228.000000" width='30' preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,1228.000000) scale(0.100000,-0.100000)"
        fill="#ee1111" stroke="none">
        <path d="M3580 10519 c-418 -47 -855 -233 -1197 -510 -191 -155 -415 -411
      -552 -631 -303 -485 -468 -1037 -512 -1713 -76 -1171 375 -2000 1524 -2802
      212 -148 408 -273 822 -523 570 -344 790 -490 1082 -717 659 -511 1296 -1213
      1537 -1693 29 -58 58 -121 65 -140 l13 -35 18 50 c139 397 809 1167 1560 1795
      329 275 617 476 1240 865 743 464 1044 683 1364 995 484 471 737 947 833 1567
      24 155 24 661 0 863 -59 490 -166 864 -357 1240 -135 265 -301 491 -511 695
      -369 358 -792 567 -1309 647 -133 20 -528 17 -665 -5 -787 -131 -1435 -583
      -1911 -1332 -64 -100 -179 -313 -229 -426 l-39 -86 -101 201 c-55 111 -137
      260 -182 332 -497 793 -1205 1275 -2008 1364 -105 12 -378 11 -485 -1z"/>
      </g>
    </svg>;
  }
  else if (meGusta == false) {
    return <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
  }
}

function Comments(props) {
  const comments = props.comments;
  const userComments = props.userComments;
  const mostrar = props.mostrar;
  const publicationId = props.publicationId;

  var text = '';

  async function postComment() {
    if (text != '' && text != null) {
      const responseJson = await createComment(text, publicationId);
      console.log('postComment Result:');
      console.log(responseJson);
    }
  }

  function changeText(e) {
    console.log('text:');
    text = e.target.value;
    console.log(text);
  }

  if (mostrar == true) {
    return (
      <>
        <hr class="mx-5" />
        {
          comments.map((comment) =>
            <ShowComments
              comment={comment}
              userComment={userComments[comment.user_id]}
            />)
        }
        <hr class="mx-5" />
        <div class="max-w-2xl mx-auto">

          <label for="chat" class="sr-only">Your message</label>
          <div class="flex items-center py-2 px-3 rounded-lg">
            <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm bg-white rounded-lg border border-gray-300" placeholder="Your message..." onChange={(e) => changeText(e)}></textarea>
            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600" onClick={postComment}>
              <svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
          </div>
        </div>
        <div class="text-sm mx-4 mt-2 mb-4">

          {/* <span class="font-semibold"></span> */}
        </div>
      </>
    );
  }
}

function ShowComments(props) {
  const comment = props.comment;
  const userComment = props.userComment;

  return (
    <div class="text-sm mx-4 mt-2 mb-4">
      <span class="font-semibold">{userComment.username}</span> {comment.text}
    </div>
  );
}

function changeMostrar() {

  if (mostrar === false) {
    mostrar = true;
  } else if (mostrar === true) {
    mostrar = false;
  }
}


const Publi = ({
  publi,
  likes,
  meGusta,
  user,
  image,
  comments,
  userComments,
  userAvatar,
}) => (

  <div class="bg-gray-100 p-4 grid place-items-center">
    <div class="bg-white border rounded-sm max-w-md">
      <button onClick={() => window.location.href = './profile?user_id=' + user.id}>
        <div class="flex items-center px-4 py-3">
          <img class="h-8 w-8 rounded-full" src={userAvatar} />
          <div class="ml-3 ">
            <span class="text-sm font-semibold antialiased block leading-tight">{user.username}</span>
          </div>
        </div>
      </button>
      <img src={image} />
      <div class="flex items-center justify-between mx-4 mt-3 mb-2">
        <div class="flex gap-5">
          <MgButton meGusta={meGusta} publi_id={publi.id}></MgButton>
          {/* <button onClick={darQuitarMeGusta(meGusta)}><MeGustaCorazon meGusta={meGusta}/></button> */}
          <button onClick={changeMostrar}>
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
          </button>

          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
        </div>
        <div class="flex">
          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
        </div>
      </div>
      <div class="font-semibold text-sm mx-4 mt-2 mb-4">{likes} likes</div>
      <div class="text-sm mx-4 mt-2 mb-4">
        <span class="font-semibold">{user.username}</span> {publi.description}
      </div>
      <Comments comments={comments} userComments={userComments} mostrar={mostrar} publicationId={publi.id} ></Comments>

    </div>
  </div>
)

Publi.propTypes = {
  publi: PropTypes.object.isRequired,
  meGusta: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}



export default Publi
