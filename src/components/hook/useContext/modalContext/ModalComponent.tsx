import { useModal } from "./context"

    const randomText = () => {
        const texts = [
            'sssss',
            'fffff',
            'ggggg',
            'hhhhh',
            'jjjjj',
        ]
        return texts[Math.floor(Math.random() * texts.length)]
    }
    

export const ModalComponent = () => {
    const {openModal} = useModal()

    const click = () => {
        openModal({
            title: 'Уведомление',
            content: <p>{randomText()}</p>
        }, 4000)
    }
    return(
        <div>
            <button onClick={click}>Показать Уведомление</button>
        </div>
    )
}