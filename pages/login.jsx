import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';

const login = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <div>
                    Email: {session.user.email}
                </div>
                <div>
                    Name: {session.user.name}
                </div>
                <div>
                    <Image src={session.user.image} width={100} height={100} alt="Picture of the author" className='rounded-full'/>
                </div>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        );
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
                <button onClick={() => signIn('google')}>Sign in with Google</button>
            </div>
        );
    }
};
export default login
