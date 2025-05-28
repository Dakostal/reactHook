import { createContext, ReactNode, useContext } from "react";

export interface ModalData {
  id: string;
  title: string;
  content: ReactNode;
}

interface ModalContextType {
  modals: ModalData[];
  openModal: (modal: Omit<ModalData, "id">, duration?: number) => void;
  closeModal: (id: string) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
    const context = useContext(ModalContext)
        if (context === undefined) {
        throw new Error ('useUserContext должен использоваться с DashboardContext')
    }
    return context;
}

