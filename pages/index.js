import { signIn, signOut, useSession } from "next-auth/react"

const index = () => {
    const { data: session } = useSession()
    if(!session) {
        return (
            <div className={'bg-blue-900 w-screen h-screen flex items-center'} >
                <div className="text-center w-full">
                    <button className="bg-white p-2 rounded-md px-4" onClick={() => signIn('google')}>Login with Google</button>
     
                </div>
            </div>
        )
    }

    return <>
    <div>Logged in {session.user.email}</div>
    <button onClick={() => signOut()}>Sign out</button>
    </>
    
}

export default index
