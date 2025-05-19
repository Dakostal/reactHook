import style from './styles.module.scss'

export const Cards = ({ title, image }) => {
    return (
        <div className={style.container}>
            <div className={style.diamondsCard}>
                <span className={style.diamondsCardName}>{title}</span>
                <img src={image} alt="" className={style.diamondsSVG} />
            </div>
        </div>
    )
}
//  сравнивать suit
