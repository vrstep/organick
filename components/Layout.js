import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";

export default function Layout({children}) {
    const { data: session } = useSession();
    if (!session) {
        // if not logged in this should appear
        return (
            <div>
                <button onClick={() => signIn("google")}>
                    Fuck you Google
                </button>
            </div>
        );
    }

    return (
        <div className="flex">
            <Nav />
            <div className="min-h-screen bg-neutral-100 flex-grow text-secondary mt3 mr3 mb3 p4">
                {children}
            </div>
        </div>
    );
}