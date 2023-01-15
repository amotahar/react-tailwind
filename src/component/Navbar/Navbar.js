import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const routes = [
        {id:"01", name:"Home", path:"/home" },
        {id:"02", name:"Products", path:"/home" },
        {id:"03", name:"Order", path:"/home" },
        {id:'04', name:"Contact", path:"/home" },
        {id:'05', name:"About", path:"/home" },
    ]
    return (
        <div>
            <nav>
            <Bars3Icon className="h-6 w-6"/>
        

                <ul className='md:flex justify-center' >
                       {
                        routes.map(route=> <Link  key={route.id} route={route}></Link>)
                       }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;