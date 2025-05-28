import { useModal } from "./context"


export const ModalContainer = () => {
    const {modals, closeModal} = useModal()

    return(
        <div    
            style={{
                position: "fixed",
                top: 20,
                right: 20,
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
      }}>
            {modals.map((modal)=> (
                <div key={modal.id}
                    style={{
                    minWidth: "250px",
                    background: "#333",
                    color: "#fff",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}>
                        
                    <strong>{modal.title}</strong>
                    <p>{modal.content}</p>
                    <button onClick={()=> closeModal(modal.id)}
                         style={{
                            marginTop: "5px",
                            background: "transparent",
                            color: "#aaa",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "12px",
                            }}>Закрыть</button>
                </div>
            ))}
        </div>
    )
}