import axios from 'axios';
import { baseUrl, apiToken } from '../Service/Constantes'


export async function getFeed() {
  var respuesta;
  await axios({
    method: 'get',
    url: baseUrl + 'getFeed',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        console.log(respuesta);
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function changeMeGusta(meGusta, publi_id) {

  var respuesta;
  var queryUrl = baseUrl;
  if (meGusta == false) {
    queryUrl = queryUrl + 'darMg';
  }
  else if (meGusta == true) {
    queryUrl = queryUrl + 'quitarMg';
  }
  axios({
    method: 'post',
    url: queryUrl,
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      publi_id: publi_id
    }
  })
    .then(response => {
      return response.data;

    })
    .then(response => {
      if (response != null) {
        respuesta = response;
        return response;
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}

export async function getAvatarByUserId(user_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getImage',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function getUserAuthId() {
  var respuesta;
  await axios({
    method: 'get',
    url: baseUrl + 'getUserAuthId',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}


export async function DoRegister(datos) {
  var respuesta;

  console.log(datos);
  await axios({
    method: 'post',
    url: baseUrl + 'register',
    data: {
      email: datos.email,
      last_name: datos.last_name,
      name: datos.name,
      password: datos.password,
      username: datos.username,
      birthday: datos.birthday
    }
  })
    .then(response => {
      return response.data;

    })
    .then(response => {
      if (response != null) {
        respuesta = response;
        return response;
      } else {
        alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}

export async function getUserInfo(user_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getUserInfo',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response.user
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function getUserPublicationsAndImages(user_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getUserPublicationsAndImages',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function getUserFollowers(user_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getUserFollowers',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function getUserFollowed(user_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getUserFollowed',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function getPublicationAndImageById(publication_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getPublicationsAndImageById',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      publication_id: publication_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function getLikesOfPublicationById(publication_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getLikesOfPublicationById',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      publication_id: publication_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function getCommentsAndUsersByPublicationId(publication_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getCommentsAndUsersByPublicationId',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      publication_id: publication_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function DoUpdate(datos, user) {
  var respuesta;
  console.log(datos);
  console.log(user);
  await axios({
    method: 'post',
    url: baseUrl + 'update',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user.id,
      email_new: datos.email,
      last_name_new: datos.last_name,
      name_new: datos.name,
      username_new: datos.username,
      birthday_new: datos.birthday,
      info_new: datos.info,
      email_old: user.email,
      last_name_old: user.last_name,
      name_old: user.name,
      username_old: user.username,
      birthday_old: user.birthday,
      info_old: user.info
    }
  })
    .then(response => {
      return response.data;

    })
    .then(response => {
      if (response != null) {
        respuesta = response;
        return response;
      } else {
        alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}

export async function UpdateAvatar(image) {
  var respuesta;
  console.log('imagen:');
  console.log(image);
  await axios({
    method: 'post',
    url: baseUrl + 'updateImage',
    headers: {
      'Authorization': 'Bearer ' + apiToken,
      'Content-Type': 'multipart/form-data'
    },
    data: {
      image: image
    }
  })
    .then(response => {
      return response.data;

    })
    .then(response => {
      if (response != null) {
        respuesta = response;
        console.log('respuesta imagen:');
        console.log(respuesta);

      } else {
        alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}

export async function deletePublication(publication_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'deletePublication',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      publication_id: publication_id
    }
  })
    .then(response => {
      return response.data;

    })
    .then(response => {
      if (response != null) {
        respuesta = response;
        console.log(respuesta);

      } else {
        alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}

export async function UploadPost(image, user_id, description) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'createPublication',
    headers: {
      'Authorization': 'Bearer ' + apiToken,
      'Content-Type': 'multipart/form-data'
    },
    data: {
      image: image,
      user_id: user_id,
      description: description
    }
  })
    .then(response => {
      return response.data;

    })
    .then(response => {
      if (response != null) {
        respuesta = response;
        console.log('respuesta upload post:');
        console.log(respuesta);

      } else {
        alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}

export async function getFollow(user_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'getFollow',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response
        /*     console.log('userInfo')
            console.log(response.user); */
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });
  return respuesta;
}

export async function changeFollow(user_id, follow) {
  var respuesta;

  var queryUrl = baseUrl;
  if (follow == false) {
    queryUrl = queryUrl + 'followUser';
  }
  else if (follow == true) {
    queryUrl = queryUrl + 'unfollowUser';
  }
  axios({
    method: 'post',
    url: queryUrl,
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      user_id: user_id
    }
  })
    .then(response => {
      return response.data;

    })
    .then(response => {
      if (response != null) {
        respuesta = response;
        return response;
      } else {
        //alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}

export async function createComment(text, publication_id) {
  var respuesta;
  await axios({
    method: 'post',
    url: baseUrl + 'createComment',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    },
    data: {
      text: text,
      publication_id: publication_id
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response;
      } else {
        alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}


export async function logout() {
  var respuesta;
  await axios({
    method: 'get',
    url: baseUrl + 'logout',
    headers: {
      'Authorization': 'Bearer ' + apiToken
    }
  })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response != null) {
        respuesta = response;
      } else {
        alert('sin datos')
      }
    })
    .catch(function (error) {
      //console.log(error);
      //alert('El email o la contraseña no son correctos')
    });

  return respuesta;
}




