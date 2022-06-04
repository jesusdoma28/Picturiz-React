import React, { Component } from 'react';
import Nav from './Nav';
import { getUserInfo, getUserAuthId, getAvatarByUserId, DoUpdate } from '../../Service/Services';

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
                                Your profile has been updated
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

export default class UserEditInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userAuthId: null,
            userAvatar: null,
            user: [],
            form: {
                name: '',
                last_name: '',
                username: '',
                email: '',
                birthday: '',
                info: ''
            },
            haveErrors: false,
            updated: false,
            errors: [],
            cargando: true
        };
    }

    async componentDidMount() {
        console.log('mounted');
        /* var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_id = urlParams.get('user_id'); */

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);
        const user = await getUserInfo(authUserId);
        console.log('id:');
        console.log(user.id);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user, cargando: false })
    }

    async componentDidUpdate() {
        console.log('updated');

        /* var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_id = urlParams.get('user_id'); */

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);
        const user = await getUserInfo(authUserId);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user })
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.id]: e.target.value
            }
        });
    }

    update = async () => {
        const responseJson = await DoUpdate(this.state.form, this.state.user);
        console.log('errors:');
        console.log(responseJson);
        this.setState({ errors: responseJson.errors, updated: responseJson.updated, haveErrors: responseJson.haveErrors })
    }

    render() {
        const { cargando, userAvatar, userAuthId, user } = this.state;

        if (cargando == true) {
            return (
                <>

                </>
            )
        }
        else {
            return (
                <>
                    <div class="bg-gray-100 h-screen">
                        <div className="App">

                            {/* <!-- component --> */}
                            <div className='bg-gray-100 grid place-items-center'>
                                <Errors show={this.state.haveErrors} errors={this.state.errors}></Errors>
                                <Success show={this.state.updated}></Success>
                                <div className="min-h-screen flex justify-center items-center">
                                    <div className="bg-white p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-5">
                                        <div className="py-8">
                                            <img width="130" className="-mt-10" src={userAvatar} />
                                        </div>
                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='name' className='font-bold'>Name </label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='name' placeholder={user.name} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='last_name' className='font-bold'>Last Name</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='last_name' placeholder={user.last_name} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='birthday' className='font-bold'>Birthday</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='birthday' type="date" placeholder={user.birthday} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='username' className='font-bold'>Username</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='username' placeholder={user.username} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='email' className='font-bold'>Email</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='email' placeholder={user.email} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='info' className='font-bold'>Info</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80 h-20" type='text' id='info' placeholder={user.info} onChange={this.handleChange} />
                                        </div>
                                        <div className="flex flex-col space-y-5 w-full">
                                            <button className="w-full bg-[#0070ba]  p-3 text-white font-bold transition duration-200 hover:bg-[#003087]" onClick={this.update}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </>
            )
        }
    }
}