import Buttons from './Buttons'
export default function Content (){
    
    return(
        <>
        <div id='content-container'>
            <div id='grid-container'>
                <div id='right-side-content-area'>
                    <div id='grid-right-side-content'>
                        <p id='text-right-side-content'>
                            <span id='title'>Vite</span>
                            <br></br>
                            Next Generation
                            Frontend Tooling
                            <p id='paragraph-right-side-content'>
                                Get ready for a development environment that can finally catch up with you.</p>
                        </p>
                        <div className="buttons-right-side-content">
                          <Buttons/>
                        </div>
                    </div>
    
                    
                </div>
                <div id='left-side-content'>
                    <img src="https://vitejs.dev/logo-with-shadow.png" />
                </div>   
            </div>
        </div>
    </>
    )
}