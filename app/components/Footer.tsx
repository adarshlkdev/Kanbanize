import Image from "next/image";
import { LinkedinIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { KanbanIcon } from "lucide-react";
export default function Footer(){
   return(

<footer className="p-5 ">
     <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
     <div className="sm:flex sm:items-center sm:justify-between">
         <span className="text-md  sm:text-center">© 2024 <Link href="/">Kanbanize™</Link>  All Rights Reserved.
         </span>
         <h4>Made with ❤️ by adarshlkdev</h4>
         <div className="flex mt-4 sm:justify-center sm:mt-0">
             <Link href="https://twitter.com/adarshlkdev" className="hover:text-gray-900 dark:hover:text-white ms-5 hover:duration-200 transition-all ease-in-out">
                 <TwitterIcon />
                 <span className="sr-only">Twitter</span>
             </Link>
             <Link href="https://github.com/adarshlkdev" className=" hover:text-gray-900 dark:hover:text-white ms-5 hover:duration-200 transition-all ease-in-out">
                 <GithubIcon />
                 <span className="sr-only">GitHub</span>
             </Link>
             <Link href="https://linkedin.com/in/adarshlkdev" className="hover:text-gray-900 dark:hover:text-white ms-5 hover:duration-200 transition-all ease-in-out">
                 <LinkedinIcon />
                 <span className="sr-only">Linkedin</span>
             </Link>
         </div>
     </div>
</footer>
   );
}