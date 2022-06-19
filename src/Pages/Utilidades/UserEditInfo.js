import React, { Component } from 'react';
import Nav from './Nav';
import { getUserInfo, getUserAuthId, getAvatarByUserId, DoUpdate, UpdateAvatar } from '../../Service/Services';
import { PropagateLoader } from 'react-spinners';
import { override } from '../../Service/Constantes';

function Progress(props) {
    const mostrar = props.show;

    if (mostrar == true) {
        return (
            <>
                <div className="flex">
                    <div className="alert flex flex-row items-center rounded">
                        <div className="max-w-lg bg-blue-200 mx-auto p-2">
                            <div className="flex space-x-2">
                                <svg className="w-6 h-6 stroke-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                <p className="text-blue-900 font-semibold">Updating...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function Success(props) {
    const mostrar = props.show;

    if (mostrar == true) {
        return (
            <>
                <div className="flex space-y-4 pt-4">
                    <div className="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
                        <div
                            className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                            <span className="text-green-500">
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                                    <path fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="alert-content ml-4">
                            <div className="alert-title font-semibold text-lg text-green-800">
                                Success
                            </div>
                            <div className="alert-description text-sm text-green-600">
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
        <div className="flex space-y-4 pt-4">
            <div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
                <div
                    className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                    <span className="text-red-500">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </span>
                </div>
                <div className="alert-content ml-4">
                    <div className="alert-title font-semibold text-lg text-red-800">
                        {title}
                    </div>
                    <div className="alert-description text-sm text-red-600">
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
            userAuthId: '',
            userAvatar: '',
            user: [],
            form: {
                name: '',
                last_name: '',
                username: '',
                email: '',
                birthday: '',
                info: '',
                image: ''
            },
            userAuthRole: '',

            haveErrors: '',
            updated: '',
            errors: [],

            cargando: true,
            updating: false
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


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user, form: { last_name: user.last_name }, cargando: false })
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
        this.setState({
            form: {
                ...this.state.form,
                [e.target.id]: e.target.value
            }
        });
    }

    handleImage = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                image: e.target.files[0]
            }
        })
    }

    updateUserInfo = async () => {
        this.setState({ updating: true, errors: [], updated: '', haveErrors: '' });
        const responseJson = await DoUpdate(this.state.form, this.state.user);

        console.log('errors:');
        console.log(responseJson);
        this.setState({ errors: responseJson.errors, updated: responseJson.updated, haveErrors: responseJson.haveErrors, updating: false })
    }

    updateUserAvatar = async () => {
        this.setState({ updating: true, errors: [], updated: '', haveErrors: '' });
        const responseJson = await UpdateAvatar(this.state.form.image);
        console.log('avatar:');
        console.log(responseJson);
        this.setState({ updated: responseJson.updatedImage, haveErrors: responseJson.haveErrorsImage, updating: false })
    }

    render() {
        const { cargando, userAvatar, userAuthId, user } = this.state;

        if (cargando == true) {
            return (
                <>
                    <div className="sweet-loading min-h-screen flex h-screen justify-center items-center">
                        <PropagateLoader color={'#4dbff0'} loading={cargando} css={override} size={15} />
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="bg-gray-100 h-screen">
                        <div className="App">
                            {/* <!-- component --> */}
                            <div className='bg-gray-100 grid place-items-center'>
                                <Progress show={this.state.updating}></Progress>
                                <Errors show={this.state.haveErrors} errors={this.state.errors}></Errors>
                                <Success show={this.state.updated}></Success>
                                <div className="min-h-screen flex justify-center items-center">
                                    <div className="bg-white p-5 border-[1px] -mt-5 border-slate-200 rounded-md flex flex-col items-center space-y-2">
                                        <div className="w-24 h-24 relative mb-4">
                                            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table">
                                                <img src={userAvatar} alt="avatar" className="object-cover object-center w-full h-full visible" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='name' className='font-bold'>Name</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='name' defaultValue={user.name} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='last_name' className='font-bold'>Last Name</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='last_name' defaultValue={user.last_name} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='birthday' className='font-bold'>Birthday</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='birthday' type="date" defaultValue={user.birthday} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='username' className='font-bold'>Username</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='username' defaultValue={user.username} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='email' className='font-bold'>Email</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" id='email' defaultValue={user.email} onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded">
                                            <label htmlFor='info' className='font-bold'>Info</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80 h-20" type='text' id='info' defaultValue={user.info} onChange={this.handleChange} />
                                        </div>


                                        <div className="flex flex-col space-y-5 w-full">
                                            <button className="w-full bg-[#0070ba]  p-3 text-white font-bold transition duration-200 hover:bg-[#003087]" onClick={this.updateUserInfo}>Save Info</button>
                                        </div>

                                        <div className="flex flex-col mb-40 bg-blue-400 rounded mt-5">
                                            <label htmlFor='image' className='font-bold'>Avatar</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80 h-20" type='file' id='image' onChange={e => this.handleImage(e)} />
                                        </div>

                                        <div className="flex flex-col space-y-5 w-full">
                                            <button className="w-full bg-[#0070ba]  p-3 text-white font-bold transition duration-200 hover:bg-[#003087]" onClick={this.updateUserAvatar}>Change Avatar</button>
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