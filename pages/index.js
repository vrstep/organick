import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    return <Layout>
        <div className="flex flex-content-between fg2">
            <h2>Hello, <b>{session?.user?.name}</b></h2>
            <div><img src={session?.user?.image} alt="" /></div>
        </div>
    </Layout>    
}
