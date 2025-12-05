import { CardRating } from '../CardRating/CardRating'
import s from './Card.module.scss'

export const Card = ({title,genre,background})=>{
    return (
        <article 
        className={s.card}
        style={{backgroundImage: `url(${background})`}}>
            <div className={s.overlay}>
                <span>{genre}</span>
                <h3>{title}</h3>
                <CardRating/>
            </div>
        </article>
    )
}