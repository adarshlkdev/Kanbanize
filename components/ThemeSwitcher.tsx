'use client'
import { SunIcon , MoonIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
    const [mounted , setMounted] = useState(false);
    const {setTheme , resolvedTheme}  = useTheme();
    
    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
        return;
    }

    if(resolvedTheme === 'dark'){
        return  <SunIcon onClick={() => setTheme('light')} />
    }

    if(resolvedTheme === 'light'){
        return  <MoonIcon onClick={() => setTheme('dark')} />
    }
}
