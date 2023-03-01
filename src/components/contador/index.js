import styles from './styles.css'
import Title from './title'
import Counter from './counter'
import useCountdown from "../../hooks/useCountdown"
// import earth from '../contador/earth.jpg'

function Contador() {
    const [day, hour, minute, second] = useCountdown("April 12, 2023 00:00:00:00")
    return (
    <section className="{world-background}">
        <div className='Contador'>
            {/* <div className='world loader'>
            </div> */}
            <div className="container-counter">
                <Title title="Vai ficar de fora dessa!?"/>
                <div className='countdown-container'>
                    <Counter title="Dias" number={day}/>
                    <Counter title="Horas" number={hour}/>
                    <Counter title="Min" number={minute}/>
                    <Counter title="Seg" number={second}/>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Contador;