import React, { Component } from 'react';
import { DoRegister } from '../Service/Services'

function Success(props) {
  const mostrar = props.show;

  if (mostrar == true) {
    return (
      <>
        <div class="flex space-y-4 pt-4">
          <div class="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
            <div
              class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
              <span class="text-green-500">
                <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </div>
            <div class="alert-content ml-4">
              <div class="alert-title font-semibold text-lg text-green-800">
                Success
              </div>
              <div class="alert-description text-sm text-green-600">
                Account Created
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

function Errors(props) {
  const mostrar = props.show;
  const errors = props.errors;
  if (mostrar == true) {
    console.log('errores----------------');
    console.log(errors.name);

    if (errors.name != '') {
      console.log('entra en name');
      return (
        <ShowError title={'Name'} text={errors.name}></ShowError>
      );
    }

    if (errors.last_name != '') {
      return (
        <ShowError title={'Last Name'} text={errors.last_name}></ShowError>
      );
    }

    if (errors.birthday != '') {
      return (
        <ShowError title={'Birthday'} text={errors.birthday}></ShowError>
      );
    }

    if (errors.username != '') {
      return (
        <ShowError title={'Username'} text={errors.username}></ShowError>
      );
    }

    if (errors.email != '') {
      return (
        <ShowError title={'Email'} text={errors.email}></ShowError>
      );
    }

    if (errors.password != '') {
      return (
        <ShowError title={'Password'} text={errors.password}></ShowError>
      );
    }
  }
}

function ShowError(props) {
  const title = props.title;
  const text = props.text;

  return (
    <div class="flex space-y-4 pt-4">
      <div class="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
        <div
          class="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
          <span class="text-red-500">
            <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </div>
        <div class="alert-content ml-4">
          <div class="alert-title font-semibold text-lg text-red-800">
            {title}
          </div>
          <div class="alert-description text-sm text-red-600">
            {text}
          </div>
        </div>
      </div>
    </div>
  );

}

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        birthday: ''
      },
      haveErrors: false,
      created: false,
      errors: []
    };
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.id]: e.target.value
      }
    });
  }

  register = async () => {
    const responseJson = await DoRegister(this.state.form);
    console.log('errors:');
    console.log(responseJson);
    this.setState({ errors: responseJson.errors, created: responseJson.created, haveErrors: responseJson.haveErrors })
  }

  render() {
    return (
      <div className="App">

        {/* <!-- component --> */}
        <div className='bg-gray-500 grid place-items-center'>
          <Errors show={this.state.haveErrors} errors={this.state.errors}></Errors>
          <Success show={this.state.created}></Success>
          <div className="min-h-screen flex justify-center items-center bg-gray-500">
            <div className="bg-white p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-5">
              <div className="py-8">
                <img width="170" className="-mt-28 -mb-16" src="logo_small_icon_only.png" />
              </div>
              <div className="flex flex-col mb-40 bg-blue-400 rounded">
                <label htmlFor='name' className='font-bold'>Name</label>
                <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Richard" id='name' onChange={this.handleChange} />
              </div>

              <div className="flex flex-col mb-40 bg-blue-400 rounded">
                <label htmlFor='last_name' className='font-bold'>Last Name</label>
                <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Galbez Bonatelo" id='last_name' onChange={this.handleChange} />
              </div>

              <div className="flex flex-col mb-40 bg-blue-400 rounded">
                <label htmlFor='birthday' className='font-bold'>Birthday</label>
                <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" type='date' placeholder="01/01/2001" id='birthday' onChange={this.handleChange} />
              </div>

              <div className="flex flex-col mb-40 bg-blue-400 rounded">
                <label htmlFor='username' className='font-bold'>Username</label>
                <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="ric12" id='username' onChange={this.handleChange} />
              </div>

              <div className="flex flex-col mb-40 bg-blue-400 rounded">
                <label htmlFor='email' className='font-bold'>Email</label>
                <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="rchard@gmail.com" id='email' onChange={this.handleChange} />
              </div>

              <div className="flex flex-col bg-blue-400 rounded">
                <label htmlFor='password' className='font-bold'>Password</label>
                <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="As123as-" id='password' onChange={this.handleChange} />
                {/* <p className="font-bold text-[#0070ba] bg-white">Forgot password?</p> */}
              </div>
              <div className="flex flex-col space-y-5 w-full">
                <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]" onClick={() => this.register()}>Register</button>
                <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                  <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                </div>
                <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200" onClick={() => window.location.href = "./"}>Return to Login</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}