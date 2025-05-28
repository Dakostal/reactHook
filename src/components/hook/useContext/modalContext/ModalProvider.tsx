import { useState } from "react"
import { ModalContext, ModalData } from "./context"

export const ModalProvider = ({children}) => {
    const [modals, setModals] = useState<ModalData[]>([])
    
    const openModal = (
        { title, content },
        duration = 4000
    ) => {
        const id = Date.now().toString()
        const modal = { id, title, content }
        setModals((prev)=> [...prev, modal])
        setTimeout(()=> closeModal(id), duration )
    }

    const closeModal = (id) => {
        setModals((prev)=> prev.filter((modal)=> modal.id !== id))
    }

    return(
        <ModalContext.Provider value={{modals, openModal, closeModal}} >
            {children}  
        </ModalContext.Provider>
    )
}