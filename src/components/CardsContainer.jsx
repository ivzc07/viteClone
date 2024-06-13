export default function CardsContainer(){
    const cardsData = [
        {
            title: 'Intstant Server Star',
            text: 'On demand file serving over native ESM, no bundling required',
            icon: '💡'
        },
        {
            title: 'Lightning Fast HMR',
            text: 'Hot Module Replacement (HMR) that stays fast regardless of app size.',
            icon: '⚡️'
        },
        {
            title: 'Rich Features',
            text: 'Out-of-the-box support for TypeScript, JSX, CSS and more.',
            icon: '🛠️'
        },
        {
            title: 'Optimized Builds',
            text: 'Pre-configured Rollup build with multi-page and library mode support.',
            icon: '📦'
        },
        {
            title: 'Universal Plugins',
            text: 'Rollup-superset plugin interface shared between dev and build.',
            icon: '🔩'
        },
        {
            title: 'Fully Typed APIs',
            text: 'Flexible programmatic APIs with full TypeScript typing.',
            icon: '🔑'
        },
    ]
    return(
        <>
            <div id='cards-container'>
              
                        {
                            cardsData.map((item)=> {
                                return(
                                    <article id="card">
                                        <div id='icon'>{item.icon}</div>
                                        <div id='title'>{item.title}</div>
                                        <div id='text'>{item.text}</div>
                                    </article>
                                )
                            })
                        }
                
            </div>
        </>
    )
}