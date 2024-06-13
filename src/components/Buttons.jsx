import clsx from 'clsx'
export default function Buttons () {
    const options = [
        {title: 'Get Started',value: false },
        {title: 'Why Vite', value: true},
        {title:'View on GitHub', value: true},
        {title:'🎉ViteConf 23!', value: false},
    ]
    return (
        <>
            {
                options.map((item)=>{
                    return(
                    <a href='#'className={clsx('button-style', {'button-color' : item.value})}>{item.title}</a>
                    )
                })
            }
        </>
    )
}