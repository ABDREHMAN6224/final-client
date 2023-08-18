"use client"

const { createContext, useState,useContext } = require("react");

const AppContext=createContext()

export const AppProvider=({children})=>{
    const [color,setColor]=useState("rgba(24, 63, 38,1)")
    const [border,setBorder]=useState("1px solid white")
    const handleScroll=()=>{
        if(typeof window !== "undefined"){
        console.log(window.scrollY)
        if(window.scrollY>130)
        {
            setBorder("none")
            setColor("rgba(24, 63, 38,1)")
        }else{
            setColor("rgba(24, 63, 38,0.7)")
            setBorder("1px solid white")
        }
}
    }
    return(
        <AppContext.Provider value={{color,handleScroll,border}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext=()=>useContext(AppContext)