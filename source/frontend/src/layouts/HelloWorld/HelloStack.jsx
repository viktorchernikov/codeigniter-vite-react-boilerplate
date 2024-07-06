// components
import IconRef from '@components/IconRef'
// assets
import reactLogo from '@assets/react.svg'
import viteLogo from '@assets/vite.svg'
import codeIgniterLogo from '@assets/codeigniter.svg'

function HelloStack() {
    return (
        <>
            <div>
                <IconRef logo={codeIgniterLogo} type="codeigniter" url="https://codeigniter.com" alt="CodeIgniter logo"/>
                <IconRef logo={viteLogo} type="vite" url="https://vitejs.dev" alt="Vite logo"/>
                <IconRef logo={reactLogo} type="react" url="https://react.dev" alt="React logo"/>
            </div>
            <h1>CodeIgniter<sup>3</sup> + Vite + React</h1>
            <p>
            Dockerize your CodeIgniter 3 backend with Vite and React support
            </p>
        </>
    )
}

export default HelloStack;