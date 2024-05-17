"use client"
import { UserButton } from "@clerk/nextjs"
import { KanbanIcon } from "lucide-react"
import { useSession } from "@clerk/nextjs"
import Link from "next/link"
import ThemeSwitcher from "@/components/ThemeSwitcher"
export default function Navbar(){
    const {isSignedIn} = useSession();
    return(
        <div className="py-5 bg-transparent relative z-10 w-full">
            <div className="flex justify-between w-[90%] max-w-[1450px] mx-auto">
                 <Link href={"/"} className="flex gap-1 items-center text-2xl max-md:text-xl font-bold uppercase">
                    <h1>Kanbanize</h1>
                    <KanbanIcon size={32} />
                 </Link>
                 <div className="flex items-center gap-5">
                   <UserButton afterSignOutUrl="/" />
                   <ThemeSwitcher />
                   {!isSignedIn && (
                    <Link href={"/sign-in"} className="tracking-wide hover:underline max-md:text-sm">
                        Already a member? Sign in &#8594;
                    </Link>
                   )}
                   
                 </div>
            </div>
        </div>
    )
}

