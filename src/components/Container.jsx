import Content from './Content'
import CardsContainer from './CardsContainer'
export default function Container(){
    return(
        <div className="container">
            <div className='main-container'> 
                <Content />
                <CardsContainer/>
            </div>
        </div>
    )
}