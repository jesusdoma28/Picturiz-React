import React, { Component } from 'react'
import Nav from './Utilidades/Nav';
import CardUser from './Utilidades/CardUser';
import { getUserAuthId, getAvatarByUserId, getResultSearch } from '../Service/Services';

function MostrarResultatos(props) {
    const resultUsers = props.resultUsers;
    const resultAvatars = props.resultAvatars;
    const resultFollow = props.resultFollow;
    const userAuthId = props.userAuthId;
    const clickBuscarBool = props.clickBuscarBool;

    if (Object.keys(resultUsers).length > 0 && clickBuscarBool == true) {
        return (
            <div class="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 px-10">
                        {
                            resultUsers.map((resultUser) =>
                                <li class="py-3 sm:py-4">
                                    <CardUser user={resultUser} avatar={resultAvatars[resultUser.id]} follow={resultFollow[resultUser.id]} userAuthId={userAuthId} />
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>

        )
    } else if (clickBuscarBool == true) {
        return (
            <div class="p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 px-10">
                        <p class="dark:text-white">no user has been found</p>
                    </ul>
                </div>
            </div >
        )
    }

}

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userAuthId: null,
            searchVar: '',
            resultUsers: [],
            resultAvatars: [],
            resultFollow: [],
            clickBuscarBool: false,
            cargando: true
        };
    }


    async componentDidMount() {
        console.log('mounted');

        const userAuthId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(userAuthId);


        this.setState({ cargando: false, userAvatar: userAvatar, userAuthId: userAuthId });
    }

    async componentDidUpdate() {
        console.log('updated');

        const userAuthId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(userAuthId);


        this.setState({ userAvatar: userAvatar, userAuthId: userAuthId });
    }

    handleChange = async e => {
        console.log('e.target.value:');
        console.log(e.target.value);
        await this.setState({

            ...this.state,
            [e.target.id]: e.target.value


        });

    }

    doSearch = async () => {
        if (this.state.searchVar != null && this.state.searchVar != 'null' && this.state.searchVar != '') {
            const resultSearch = await getResultSearch(this.state.searchVar);

            console.log('resultSearch:');
            console.log(resultSearch);
            this.setState({ resultUsers: resultSearch.users, resultAvatars: resultSearch.avatars, resultFollow: resultSearch.authFollowList, clickBuscarBool: true });
        }
        else {
            alert('La barra de busqueda no puede estar vacia')
        }
    }


    render() {
        const { cargando, userAvatar, userAuthId, resultUsers, resultAvatars, resultFollow, clickBuscarBool } = this.state;

        if (cargando == true) {
            return (
                <Nav userAvatar={userAvatar} userAuthId={userAuthId} />
            )
        }
        else {
            return (
                <>
                    <div class="bg-gray-100 h-full">
                        <Nav userAvatar={userAvatar} userAuthId={userAuthId} />
                        <div class="flex justify-center p-10 grid place-items-center h-80">
                            <div class="max-w-2xl mx-auto">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="flex justify-center">
                                    <div class="relative w-full">
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="searchVar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required onChange={this.handleChange} />
                                    </div>
                                    <button onClick={this.doSearch} class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                </div>

                                <MostrarResultatos resultUsers={resultUsers} resultAvatars={resultAvatars} resultFollow={resultFollow} userAuthId={userAuthId} clickBuscarBool={clickBuscarBool}></MostrarResultatos>

                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}