import Layout from "@/components/Layout"
import { useSession } from "next-auth/react"
const index = () => {
    const { data: session } = useSession()
    return <Layout>
        <div className="text-blue-900 flex justify-between">
            <h2>
                Hello, {session?.user?.name}
            </h2>
            <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
                <img src={session?.user?.image} alt="userimage" className="w-6  h-6" />
                <span className="px-2">
                    {session?.user?.email}
                </span>
            </div>
        </div>
    </Layout>

}

export default index
