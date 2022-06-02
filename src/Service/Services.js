import axios from 'axios';
import {baseUrl, apiToken} from '../Service/Constantes'


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
    data:{
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

export async function getAvatar() {
  var respuesta;
  await axios({
    method: 'get',
    url: baseUrl + 'getImage',
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
    data:{
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
    data:{
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