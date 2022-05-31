import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const baseUrl = "http://127.0.0.1:8000/api/publications";
const apiKey = cookies.get('token')


export async function getFeed() {
    var respuesta;
        await axios({
        method: 'get',
        url: baseUrl,
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