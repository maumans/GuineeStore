import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Unauthenticated({ header, children }) {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="appThemeBackgroundColor1 appThemeBorderBottom32px fixed w-full">
                <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex w-full">
                            <Link className="shrink-0 flex items-center appThemeColor2" href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current" />


                                <div className="text-xl ml-2 font-bold transition duration-500">
                                        GuineeStore
                                </div>

                                {/*{!showingNavigationDropdown
                                    &&
                                <div className="appThemeColor2 text-xl ml-2 font-bold lg:hidden transition duration-500">
                                    {header}
                                </div>
                                }*/}
                            </Link>

                            <div className="hidden lg:space-x-2 xl:space-x-6 sm:-my-px sm:ml-5 sm:flex w-full ">

                                {/*<NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Accueil
                                </NavLink>
                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Produit
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Boutique
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Restaurant
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Offre d'emploi
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Immobilier
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Locations
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Bon coins
                                </NavLink>*/}

                                <NavLink href='/' active={route().current('welcome')}>
                                    Accueil
                                </NavLink>

                            </div>

                            <div className="hidden lg:space-x-2 xl:space-x-6 sm:-my-px sm:ml-5 sm:flex justify-end w-full ">

                                {/*<NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Accueil
                                </NavLink>
                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Produit
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Boutique
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Restaurant
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Offre d'emploi
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Immobilier
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Locations
                                </NavLink>

                                <NavLink href={route('dashboard')} active={route().current('accueil')}>
                                    Bon coins
                                </NavLink>*/}

                                <NavLink href={route('login')} active={route().current('login')}>
                                    Se connecter
                                </NavLink>

                                <NavLink href={route('register')} active={route().current('register')}>
                                    S'inscrire
                                </NavLink>

                            </div>
                        </div>

                        {/*<div className="hidden lg:flex sm:items-center sm:ml-6">
                            <div className="ml-2 mr-2 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 appThemeBorder22px text-sm leading-4 font-medium rounded-md appThemeColor2 appThemeBackgroundColor hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profil</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Déconnexion
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>*/}

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md appThemeColor2 hover:text-gray-500 hover:text-red-300 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden transition duration-150'}>
                    {/*<div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Accueil
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Produit
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Boutique
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Restaurant
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Offre d'emploi
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Immobilier
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Location
                        </ResponsiveNavLink>
                    </div>*/}

                    {/*<div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('accueil')}>
                            Bon coin
                        </ResponsiveNavLink>
                    </div>*/}

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('login')} active={route().current('login')}>
                            Se connecter
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('register')} active={route().current('register')}>
                            S'inscrire
                        </ResponsiveNavLink>
                    </div>

                    {/*<div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base appThemeColor3">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm appThemeColor4">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profil</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Déconnexion
                            </ResponsiveNavLink>
                        </div>
                    </div>*/}
                </div>
            </nav>

            <main style={{paddingTop:64}}>

                {/*{header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}*/}

                {children}
            </main>
        </div>
    );
}
