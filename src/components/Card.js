import { IoIosPin } from 'react-icons/io';

function Card (props) {
    return(
        <section className="card">
            <img src={props.item.imageUrl} alt={props.item.alt}/>
            <div className="card--text">
                <div>
                    <span className="card--icon"><IoIosPin /></span>
                    <span className="card--country">{props.item.location} </span>
                    <a href={props.item.googleMapsUrl} className="card--pin"> View on Google maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className="card--bold">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </section>
    )}
export default Card;