import React, { Component, useState } from 'react'
import Nav from './Utilidades/Nav';
import { getUserAuthId, getAvatarByUserId, getUserAuthRole, getAllUsers, deleteUserByUserId } from '../Service/Services';
import DataTable from 'react-data-table-component';
import { PropagateLoader } from 'react-spinners';
import { override } from '../Service/Constantes';

function Buttons(props) {
    const user_id = props.user_id;
    async function borrar() {
        const response = await deleteUserByUserId(user_id);
    }
    return (
        <>
            <button onClick={borrar}><img width='25' src='trash.svg'></img></button>
            <button onClick={() => window.location.href = './userEditInfo?user_id=' + user_id}><img width='25' src="edit.svg"></img></button>
        </>
    )
}

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.last_name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Birthday',
        selector: row => row.birthday,
        sortable: true,
    },
    {
        name: 'Username',
        selector: row => row.username,
        sortable: true,
    },
    {
        name: 'role_id',
        selector: row => row.role_id,
        sortable: true,
    },
    {
        name: 'avatar',
        selector: row => row.avatar,
        sortable: true,
    },
    {
        name: 'Information',
        selector: row => row.info,
        sortable: true,
    },
    {
        name: 'actions',
        selector: row => row.id,
        button: true,
        cell: row => <Buttons user_id={row.id}></Buttons>
    }

];

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '2px', // override the cell padding for data cells
            paddingRight: '2px',
            marginLeft: '0px',
            marginRight: '0px',
            minWidth: 'auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
        },
    },
    cells: {
        style: {
            paddingLeft: '2px', // override the cell padding for data cells
            paddingRight: '2px',
            marginLeft: '0px',
            marginRight: '0px',
            minWidth: 'auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',

        },
    },
};



export default class AdminUsers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userAvatar: null,
            userAuthId: null,
            userAuthRole: '',
            users: null,
            cargando: true
        };
    }


    async componentDidMount() {
        console.log('mounted')

        const userAuthId = await getUserAuthId();
        const userAvatar = await getAvatarByUserId(userAuthId);
        const userAuthRole = await getUserAuthRole();
        const users = await getAllUsers();
        console.log('users:');
        console.log(users);

        this.setState({ cargando: false, userAvatar: userAvatar, userAuthId: userAuthId, userAuthRole: userAuthRole, users: users.users })
        console.log('mounted cargado');
    }

    async componentDidUpdate() {
        console.log('updated')

        const userAuthRole = await getUserAuthRole();
        const users = await getAllUsers();
        console.log('users:');
        console.log(users);

        this.setState({ userAuthRole: userAuthRole, users: users.users })

        console.log('updated cargado')
    }



    render() {
        const { cargando, userAvatar, userAuthId, userAuthRole, users } = this.state



        if (cargando == true) {
            return (
                <>
                    <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
                    <div className="sweet-loading min-h-screen flex h-screen justify-center items-center">
                        <PropagateLoader color={'#4dbff0'} loading={cargando} css={override} size={15} />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Nav userAvatar={userAvatar} userAuthId={userAuthId} userAuthRole={userAuthRole} />
                    {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}

                    <div className="flex justify-center p-10 grid place-items-center">
                        <div className='mx-auto'>
                            <button class="flex bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = './addNewUser'}>
                                Add New User <img className='ml-2' width='25' src="newUser.svg"></img>
                            </button>
                        </div>
                        <div className="mx-auto">

                            <DataTable
                                columns={columns}
                                data={users}
                                pagination
                                customStyles={customStyles}
                                striped
                            />

                        </div>
                    </div>

                </>
            )
        }
    }
}