import Link from 'next/link';
export default function Nav() {
    const inactiveLink = 'flex flex-items-center fg2 text-neutral-100';
    const activeLink = inactiveLink + 'bg-neutral-400 text-accent-700';


    return (
        <aside className='flex flex-column fg4 p5'>
            <a className='flex flex-items-center fg2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="56" viewBox="0 0 39 56" fill="none">
                    <path d="M1.85059 42.0684H19.2909H36.7312" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M5.79102 48.5L19.291 48.5L32.791 48.5" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M18.791 1.50002L18.791 8.50002L18.791 15.5" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M18.8652 14.7842V41.2158" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M29.9249 4.55275L18.8652 15.637" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M34.1787 8.81593L18.8652 24.1633" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M36.7309 15.6367L18.8652 32.6894" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M37.5817 23.3106L18.8652 42.0685" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M37.582 31.8369L27.373 42.0685" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M1 31.8369L11.209 42.0685" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M8.65625 4.55275L18.8652 15.637" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M4.40332 8.81593L18.866 24.1633" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M1.85059 14.7842L18.8655 32.6895" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M1 22.458L18.8657 41.2159" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M19.291 54.8579C9.19019 54.8579 1 46.4056 1 35.9772V20.0228C1 9.5963 9.19019 1.14211 19.291 1.14211C29.3937 1.14211 37.5821 9.5963 37.5821 20.0228V35.9772C37.5839 46.4056 29.3937 54.8579 19.291 54.8579Z" stroke="#7EB693" stroke-width="2" stroke-miterlimit="10"/>
                </svg>
                <span className="text-primary-700 ff-heading">Organick</span>
            </a>
            <nav className='flex flex-column fg2'>
                <Link className={activeLink} href={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heroicon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Dashboard
                </Link>
                <Link className={inactiveLink} href={'/products'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heroicon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                Products
                </Link>
                <Link className={inactiveLink} href={'/categories'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heroicon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                Categories
                </Link>
                <Link className={inactiveLink} href={'/settings'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heroicon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
                </Link>
            </nav>
        </aside>
    );
}
