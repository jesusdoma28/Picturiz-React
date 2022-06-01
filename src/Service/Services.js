import axios from 'axios';
import { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const baseUrl = "http://127.0.0.1:8000/api/";
const apiKey = cookies.get('token')

export async function getFeed() {
  var respuesta;
  await axios({
    method: 'get',
    url: baseUrl + 'publications',
    headers: {
      'Authorization': 'Bearer ' + cookies.get('token')
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
  console.log('publi_id changeMg:' + publi_id);
  axios({
    method: 'post',
    url: queryUrl,
    headers: {
      'Authorization': 'Bearer ' + cookies.get('token')
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