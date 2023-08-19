"use client"

const { createContext, useState,useContext } = require("react");

const AppContext=createContext()

export const AppProvider=({children})=>{
    const [color,setColor]=useState("rgba(24, 63, 38,1)")
    const [border,setBorder]=useState("1px solid white")
    const [smallBarOpen,setSmallBarOpen]=useState(false)
    const [displaybar,setDisplay]=useState("visible")
    
    const toggleBar=()=>{
        setSmallBarOpen(!smallBarOpen)
    }
    const handleScroll=()=>{
        if(typeof window !== "undefined"){
        if(window.scrollY>130)
        {
            setDisplay("hidden")
            setBorder("none")
            setColor("rgba(24, 63, 38,1)")
        }else{
            setDisplay("visible")
            setColor("rgba(24, 63, 38,1)")
            setBorder("1px solid white")
        }
        

}
    }
    return(
        <AppContext.Provider value={{color,handleScroll,border,smallBarOpen,toggleBar,displaybar}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext=()=>useContext(AppContext)