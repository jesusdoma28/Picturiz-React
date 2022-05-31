import axios from 'axios';
import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const baseUrl = "http://127.0.0.1:8000/api/login";

export default class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.id]: e.target.value
            }
        });
    }

    login = async () => {

        await axios({
            method: 'post',
            url: baseUrl,
            data: {
                email: this.state.form.email,
                password: this.state.form.password
            }
        })
        .then(response=>{
            return response.data;
        })     
        .then(response=>{
            if (response != null) {
                var respuesta = response;
                console.log(respuesta);
                cookies.set('token', respuesta.accessToken, {path: "/"});
                console.log(cookies.get('token'));
                // cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                // cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                // cookies.set('nombre', respuesta.nombre, {path: "/"});
                // cookies.set('username', respuesta.username, {path: "/"});
                window.location.href="./LoguedInicio";
            }else{
                alert('El email o la contraseña no son correctos')
            }
        })
        .catch(function (error) {
            console.log(error);
            alert('El email o la contraseña no son correctos')
        });

        
        /* await axios.post('/user', {
         firstName: 'Fred',
         lastName: 'Flintstone'
       })
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       }); */
    }

    render() {
        return (
            <div className="App">

                {/* <!-- component --> */}
                <div className="min-h-screen flex justify-center items-center bg-gray-500">
                    <div className="bg-white p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-5">
                        <div className="py-8">
                            <img width="170" className="-mt-28 -mb-16" src="logo_small_icon_only.png" />
                        </div>
                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                            <label htmlFor='email' className='font-bold'>Email</label>
                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail" id='email' onChange={this.handleChange} />
                        </div>
                        <div className="flex flex-col bg-blue-400 rounded">
                            <label htmlFor='password' className='font-bold'>Password</label>
                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" id='password' onChange={this.handleChange} />
                            <p className="font-bold text-[#0070ba] bg-white">Forgot password?</p>
                        </div>
                        <div className="flex flex-col space-y-5 w-full">
                            <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]" onClick={() => this.login()}>Log in</button>
                            <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                                <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                            </div>
                            <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
