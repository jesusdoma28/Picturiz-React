import React from 'react';
import { logout } from '../../Service/Services';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

async function doLogout() {
    const responseJson = await logout();

    if (responseJson.logout == true) {
        window.location.href = "./";
        cookies.remove('token');
    }
}

function AdminButton(props) {
    const userAuthRole = props.userAuthRole;
    if (userAuthRole.role_name == 'Admin') {
        return (
            <button className="uppercase px-6 py-1 rounded bg-gray-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg" onClick={() => window.location.href = './admin'}>Admin</button>
        )
    }
}

const Nav = ({
    userAvatar,
    userAuthId,
    userAuthRole
}) => (
    <nav className="bg-white shadow px-48 border-b border-gray-400">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex px-2 lg:px-0">
                    <div className="flex-shrink-0 flex items-center">
                        <div className="block lg:hidden h-8 w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.296 29" width="115.296" height="29"><g fill="#6297da" color="#6297da" transform="translate(0, 0) scale(0.29)"><svg width="100.0" height="100.0" x="0.0" y="0.0" viewBox="0 0 100 100"><g><g><path fill="currentColor" d="M55.876,23.608h-5.928c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5c0.828,0,1.5-0.671,1.5-1.5    s-0.672-1.5-1.5-1.5c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5h5.928c7.444,0,13.5,6.056,13.5,13.5v2.766    c0,7.444-6.056,13.5-13.5,13.5c-0.828,0-1.5,0.671-1.5,1.5s0.672,1.5,1.5,1.5c9.098,0,16.5-7.402,16.5-16.5v-2.766    C72.376,31.01,64.974,23.608,55.876,23.608z"></path><path fill="currentColor" d="M49.948,56.374c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5h5.928c5.79,0,10.5-4.71,10.5-10.5v-2.766    c0-5.79-4.71-10.5-10.5-10.5c-0.828,0-1.5,0.671-1.5,1.5s0.672,1.5,1.5,1.5c4.136,0,7.5,3.364,7.5,7.5v2.766    c0,4.136-3.364,7.5-7.5,7.5h-5.928c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5c0.828,0,1.5-0.671,1.5-1.5    S50.776,56.374,49.948,56.374z"></path><path fill="currentColor" d="M37.935,23.608c-2.378,0-4.311,1.859-4.47,4.197c-0.02,0.098-0.03,0.199-0.03,0.303v47.527    c0,0.104,0.011,0.205,0.03,0.303c0.159,2.338,2.092,4.197,4.47,4.197c2.481,0,4.5-2.019,4.5-4.5c0-0.829-0.672-1.5-1.5-1.5    s-1.5,0.671-1.5,1.5c0,0.827-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5V28.108c0-0.827,0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5    c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5C42.435,25.627,40.416,23.608,37.935,23.608z"></path><path fill="currentColor" d="M40.935,32.608c-0.828,0-1.5,0.671-1.5,1.5v35.527c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5V34.108    C42.435,33.28,41.763,32.608,40.935,32.608z"></path></g></g></svg></g><line x1="41" y1="1" x2="41" y2="28" stroke="#103f9b" strokeLinecap="round"></line><path fill="#103f9b" fillRule="nonzero" d="M2.71 19.44L0 19.44L0 0L4.82 0Q6.58 0 7.62 0.64Q8.66 1.27 9.14 2.47Q9.62 3.67 9.62 5.38L9.62 5.38Q9.62 6.91 9.08 8.04Q8.54 9.17 7.49 9.78Q6.43 10.39 4.85 10.39L4.85 10.39L2.71 10.39L2.71 19.44ZM2.71 1.94L2.71 8.45L3.96 8.45Q5.14 8.45 5.81 8.18Q6.48 7.92 6.77 7.26Q7.06 6.60 7.06 5.40L7.06 5.40Q7.06 4.01 6.85 3.26Q6.65 2.52 6 2.23Q5.35 1.94 3.98 1.94L3.98 1.94L2.71 1.94ZM14.04 19.44L11.47 19.44L11.47 5.57L14.04 5.57L14.04 19.44ZM14.04 3.50L11.47 3.50L11.47 0.82L14.04 0.82L14.04 3.50ZM20.59 19.63L20.59 19.63Q18.89 19.63 18.01 18.95Q17.14 18.26 16.84 17.02Q16.54 15.77 16.54 14.11L16.54 14.11L16.54 10.92Q16.54 9.17 16.85 7.93Q17.16 6.70 18.04 6.04Q18.91 5.38 20.59 5.38L20.59 5.38Q22.10 5.38 22.93 5.87Q23.76 6.36 24.07 7.33Q24.38 8.30 24.38 9.74L24.38 9.74L24.38 10.56L22.06 10.56L22.06 9.72Q22.06 8.81 21.94 8.28Q21.82 7.75 21.50 7.51Q21.19 7.27 20.62 7.27L20.62 7.27Q19.99 7.27 19.66 7.56Q19.32 7.85 19.21 8.53Q19.10 9.22 19.10 10.39L19.10 10.39L19.10 14.76Q19.10 16.54 19.44 17.14Q19.78 17.74 20.64 17.74L20.64 17.74Q21.29 17.74 21.59 17.44Q21.89 17.14 21.97 16.58Q22.06 16.03 22.06 15.34L22.06 15.34L22.06 14.21L24.38 14.21L24.38 15.17Q24.38 16.56 24.06 17.57Q23.74 18.58 22.91 19.10Q22.08 19.63 20.59 19.63ZM30.36 19.63L30.36 19.63Q29.28 19.63 28.62 19.22Q27.96 18.82 27.66 18.07Q27.36 17.33 27.36 16.32L27.36 16.32L27.36 7.27L25.90 7.27L25.90 5.57L27.36 5.57L27.36 1.51L29.93 1.51L29.93 5.57L32.16 5.57L32.16 7.27L29.93 7.27L29.93 16.15Q29.93 16.97 30.19 17.32Q30.46 17.66 31.20 17.66L31.20 17.66Q31.39 17.66 31.64 17.64Q31.90 17.62 32.14 17.59L32.14 17.59L32.14 19.49Q31.66 19.56 31.25 19.60Q30.84 19.63 30.36 19.63ZM36.05 19.63L36.05 19.63Q35.23 19.63 34.78 19.20Q34.32 18.77 34.14 18.12Q33.96 17.47 33.96 16.80L33.96 16.80L33.96 5.57L36.53 5.57L36.53 16.03Q36.53 16.78 36.74 17.20Q36.96 17.62 37.63 17.62L37.63 17.62Q38.06 17.62 38.53 17.36Q39.00 17.11 39.43 16.75L39.43 16.75L39.43 5.57L42.00 5.57L42.00 19.44L39.43 19.44L39.43 18.07Q38.76 18.72 37.91 19.18Q37.06 19.63 36.05 19.63ZM47.26 19.44L44.69 19.44L44.69 5.57L47.26 5.57L47.26 7.54Q48.02 6.26 48.79 5.83Q49.56 5.40 50.33 5.40L50.33 5.40Q50.42 5.40 50.51 5.40Q50.59 5.40 50.74 5.42L50.74 5.42L50.74 8.26Q50.45 8.14 50.08 8.05Q49.70 7.97 49.32 7.97L49.32 7.97Q48.72 7.97 48.23 8.24Q47.74 8.52 47.26 9.31L47.26 9.31L47.26 19.44ZM55.06 19.44L52.49 19.44L52.49 5.57L55.06 5.57L55.06 19.44ZM55.06 3.50L52.49 3.50L52.49 0.82L55.06 0.82L55.06 3.50ZM64.20 19.44L57.29 19.44L57.29 17.71L61.54 7.49L57.72 7.49L57.72 5.57L64.30 5.57L64.30 6.96L60.02 17.50L64.20 17.50L64.20 19.44Z" transform="translate(51, 4.78)"></path></svg>
                        </div>

                        <div className="hidden lg:block h-8 w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.296 29" width="115.296" height="29"><g fill="#6297da" color="#6297da" transform="translate(0, 0) scale(0.29)"><svg width="100.0" height="100.0" x="0.0" y="0.0" viewBox="0 0 100 100"><g><g><path fill="currentColor" d="M55.876,23.608h-5.928c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5c0.828,0,1.5-0.671,1.5-1.5    s-0.672-1.5-1.5-1.5c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5h5.928c7.444,0,13.5,6.056,13.5,13.5v2.766    c0,7.444-6.056,13.5-13.5,13.5c-0.828,0-1.5,0.671-1.5,1.5s0.672,1.5,1.5,1.5c9.098,0,16.5-7.402,16.5-16.5v-2.766    C72.376,31.01,64.974,23.608,55.876,23.608z"></path><path fill="currentColor" d="M49.948,56.374c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5h5.928c5.79,0,10.5-4.71,10.5-10.5v-2.766    c0-5.79-4.71-10.5-10.5-10.5c-0.828,0-1.5,0.671-1.5,1.5s0.672,1.5,1.5,1.5c4.136,0,7.5,3.364,7.5,7.5v2.766    c0,4.136-3.364,7.5-7.5,7.5h-5.928c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5c0.828,0,1.5-0.671,1.5-1.5    S50.776,56.374,49.948,56.374z"></path><path fill="currentColor" d="M37.935,23.608c-2.378,0-4.311,1.859-4.47,4.197c-0.02,0.098-0.03,0.199-0.03,0.303v47.527    c0,0.104,0.011,0.205,0.03,0.303c0.159,2.338,2.092,4.197,4.47,4.197c2.481,0,4.5-2.019,4.5-4.5c0-0.829-0.672-1.5-1.5-1.5    s-1.5,0.671-1.5,1.5c0,0.827-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5V28.108c0-0.827,0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5    c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5C42.435,25.627,40.416,23.608,37.935,23.608z"></path><path fill="currentColor" d="M40.935,32.608c-0.828,0-1.5,0.671-1.5,1.5v35.527c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5V34.108    C42.435,33.28,41.763,32.608,40.935,32.608z"></path></g></g></svg></g><line x1="41" y1="1" x2="41" y2="28" stroke="#103f9b" strokeLinecap="round"></line><path fill="#103f9b" fillRule="nonzero" d="M2.71 19.44L0 19.44L0 0L4.82 0Q6.58 0 7.62 0.64Q8.66 1.27 9.14 2.47Q9.62 3.67 9.62 5.38L9.62 5.38Q9.62 6.91 9.08 8.04Q8.54 9.17 7.49 9.78Q6.43 10.39 4.85 10.39L4.85 10.39L2.71 10.39L2.71 19.44ZM2.71 1.94L2.71 8.45L3.96 8.45Q5.14 8.45 5.81 8.18Q6.48 7.92 6.77 7.26Q7.06 6.60 7.06 5.40L7.06 5.40Q7.06 4.01 6.85 3.26Q6.65 2.52 6 2.23Q5.35 1.94 3.98 1.94L3.98 1.94L2.71 1.94ZM14.04 19.44L11.47 19.44L11.47 5.57L14.04 5.57L14.04 19.44ZM14.04 3.50L11.47 3.50L11.47 0.82L14.04 0.82L14.04 3.50ZM20.59 19.63L20.59 19.63Q18.89 19.63 18.01 18.95Q17.14 18.26 16.84 17.02Q16.54 15.77 16.54 14.11L16.54 14.11L16.54 10.92Q16.54 9.17 16.85 7.93Q17.16 6.70 18.04 6.04Q18.91 5.38 20.59 5.38L20.59 5.38Q22.10 5.38 22.93 5.87Q23.76 6.36 24.07 7.33Q24.38 8.30 24.38 9.74L24.38 9.74L24.38 10.56L22.06 10.56L22.06 9.72Q22.06 8.81 21.94 8.28Q21.82 7.75 21.50 7.51Q21.19 7.27 20.62 7.27L20.62 7.27Q19.99 7.27 19.66 7.56Q19.32 7.85 19.21 8.53Q19.10 9.22 19.10 10.39L19.10 10.39L19.10 14.76Q19.10 16.54 19.44 17.14Q19.78 17.74 20.64 17.74L20.64 17.74Q21.29 17.74 21.59 17.44Q21.89 17.14 21.97 16.58Q22.06 16.03 22.06 15.34L22.06 15.34L22.06 14.21L24.38 14.21L24.38 15.17Q24.38 16.56 24.06 17.57Q23.74 18.58 22.91 19.10Q22.08 19.63 20.59 19.63ZM30.36 19.63L30.36 19.63Q29.28 19.63 28.62 19.22Q27.96 18.82 27.66 18.07Q27.36 17.33 27.36 16.32L27.36 16.32L27.36 7.27L25.90 7.27L25.90 5.57L27.36 5.57L27.36 1.51L29.93 1.51L29.93 5.57L32.16 5.57L32.16 7.27L29.93 7.27L29.93 16.15Q29.93 16.97 30.19 17.32Q30.46 17.66 31.20 17.66L31.20 17.66Q31.39 17.66 31.64 17.64Q31.90 17.62 32.14 17.59L32.14 17.59L32.14 19.49Q31.66 19.56 31.25 19.60Q30.84 19.63 30.36 19.63ZM36.05 19.63L36.05 19.63Q35.23 19.63 34.78 19.20Q34.32 18.77 34.14 18.12Q33.96 17.47 33.96 16.80L33.96 16.80L33.96 5.57L36.53 5.57L36.53 16.03Q36.53 16.78 36.74 17.20Q36.96 17.62 37.63 17.62L37.63 17.62Q38.06 17.62 38.53 17.36Q39.00 17.11 39.43 16.75L39.43 16.75L39.43 5.57L42.00 5.57L42.00 19.44L39.43 19.44L39.43 18.07Q38.76 18.72 37.91 19.18Q37.06 19.63 36.05 19.63ZM47.26 19.44L44.69 19.44L44.69 5.57L47.26 5.57L47.26 7.54Q48.02 6.26 48.79 5.83Q49.56 5.40 50.33 5.40L50.33 5.40Q50.42 5.40 50.51 5.40Q50.59 5.40 50.74 5.42L50.74 5.42L50.74 8.26Q50.45 8.14 50.08 8.05Q49.70 7.97 49.32 7.97L49.32 7.97Q48.72 7.97 48.23 8.24Q47.74 8.52 47.26 9.31L47.26 9.31L47.26 19.44ZM55.06 19.44L52.49 19.44L52.49 5.57L55.06 5.57L55.06 19.44ZM55.06 3.50L52.49 3.50L52.49 0.82L55.06 0.82L55.06 3.50ZM64.20 19.44L57.29 19.44L57.29 17.71L61.54 7.49L57.72 7.49L57.72 5.57L64.30 5.57L64.30 6.96L60.02 17.50L64.20 17.50L64.20 19.44Z" transform="translate(51, 4.78)"></path></svg>
                        </div>
                    </div>
                </div>
                {/* <div className="flex-1 flex items-center justify-center px-2 lg:ml-12">
                    <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                id="search"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                                placeholder="Search"
                                type="search"
                            />
                        </div>
                    </div>
                </div> */}
                {/* <div className="flex items-center lg:hidden">
                     <!-- Mobile menu button --> 
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Main menu"
                        aria-expanded="false"
                    >
                         <!-- Icon when menu is closed. -->
      <!-- Menu open: "hidden", Menu closed: "block" --> 
                        <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                          <!-- Icon when menu is open. -->
      <!-- Menu open: "block", Menu closed: "hidden" --> 
                        <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div> */}
                {/* <!-- icons--> */}

                <div className="ml-4 flex items-center">
                    <AdminButton userAuthRole={userAuthRole}></AdminButton>
                    <button
                        className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Notifications"
                        onClick={() => window.location.href = './home'}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </button>

                    <button
                        className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Notifications"
                        onClick={() => window.location.href = './search'}
                    >
                        <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <button
                        className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Notifications"
                        onClick={() => window.location.href = './uploadPost?user_id=' + userAuthId}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                            />
                        </svg>
                    </button>

                    {/* <button
                        className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Notifications"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                            />
                        </svg>
                    </button>

                    <button
                        className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Notifications"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    </button>

                    <button
                        className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Notifications"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button> */}

                    {/* <!-- Profile dropdown --> */}
                    <div className="ml-4 relative flex-shrink-0">
                        <div>
                            <button
                                className="flex rounded-full border-gray-700 transition duration-150 ease-in-out"
                                id="user-menu"
                                aria-label="User menu"
                                aria-haspopup="true"
                                onClick={() => window.location.href = './profile?user_id=' + userAuthId}
                            >
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={userAvatar}
                                />
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>

                    <button
                        className="flex-shrink-0 p-1 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
                        aria-label="Notifications"
                        onClick={doLogout}
                    >

                        <img src="logout.svg" className="h-6 w-6 ml-2"></img>

                    </button>
                </div>
            </div>
        </div>
    </nav>
)



export default Nav;