import React, { Component } from 'react';
import Nav from './Utilidades/Nav';
import { getUserInfo, getUserAuthId, getAvatarByUserId, UploadPost, getUserAuthRole } from '../Service/Services';

function Progress(props) {
    const mostrar = props.show;

    if (mostrar == true) {
        return (
            <>
                <div className="flex">
                    <div className="alert flex flex-row items-center rounded">
                        <div className="max-w-lg bg-blue-200 mx-auto p-2">
                            <div className="flex space-x-2">
                                <svg className="w-6 h-6 stroke-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                <p className="text-blue-900 font-semibold">Posting...</p>
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
            userAuthId: null,
            userAvatar: null,
            user: [],
            form: {
                description: '',
                image: null
            },
            userAuthRole: '',
            uploaded: false,
            cargando: true,
            posting: false
        };
    }

    async componentDidMount() {
        console.log('mounted');
        /* var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_id = urlParams.get('user_id'); */

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);
        const userAuthRole = await getUserAuthRole();

        const user = await getUserInfo(authUserId);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user, userAuthRole: userAuthRole, cargando: false })
    }

    async componentDidUpdate() {
        console.log('updated');

        /* var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var user_id = urlParams.get('user_id'); */

        const authUserId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(authUserId);
        const userAuthRole = await getUserAuthRole();

        const user = await getUserInfo(authUserId);


        this.setState({ userAvatar: userAvatar, userAuthId: authUserId, user: user, userAuthRole: userAuthRole })
    }

    handleChange = async e => {
        await this.setState({
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

    uploadPost = async () => {
        this.setState({ posting: true })
        const responseJson = await UploadPost(this.state.form.image, this.state.user.id, this.state.form.description);
        console.log('uploaded:');
        console.log(responseJson);
        this.setState({ uploaded: responseJson.updated, posting: false })

        window.location.href = './profile?user_id=' + this.state.userAuthId;
    }

    render() {
        const { cargando, userAvatar, userAuthId, user, userAuthRole } = this.state;

        if (cargando == true) {
            return (
                <>
                    <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
                </>
            )
        }
        else {
            return (
                <>
                    <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />

                    <div className="bg-gray-100 h-screen">
                        <div className="App">
                            {/* <!-- component --> */}
                            <div className='bg-gray-100 grid place-items-center'>
                                <Progress show={this.state.posting}></Progress>
                                <div className="min-h-screen flex justify-center items-center">
                                    <div className="bg-white p-5 border-[1px] -mt-5 border-slate-200 rounded-md flex flex-col items-center space-y-2">

                                        <div className="flex flex-col bg-blue-400 rounded mt-5">
                                            <label htmlFor='image' className='font-bold'>Image</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80 h-20" type='file' id='image' onChange={e => this.handleImage(e)} />
                                        </div>
                                        <div className="flex flex-col mb-20 bg-blue-400 rounded">
                                            <label htmlFor='description' className='font-bold'>Description</label>
                                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80 h-20" type='text' id='description' onChange={this.handleChange} />
                                        </div>

                                        <div className="flex flex-col space-y-10 mt-20 w-full">
                                            <button className="w-full bg-[#0070ba]  p-3 text-white font-bold transition duration-200 hover:bg-[#003087]" onClick={this.uploadPost}>Post</button>
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