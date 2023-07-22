import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
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

    return <div>logged in {session.user.name}</div>;
}
