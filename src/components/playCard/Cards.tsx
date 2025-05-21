import style from './styles.module.scss'

export const Cards = ({ title }) => {

    return (
        <div className={style.container}>
            <div className={style.diamondsCard}>
                <span className={style.diamondsCardName}>{title}</span>
            </div>
        </div>
    )
}
//  сравнивать suit
