// components
import IconRef from '@components/IconRef'
// assets
import githubLogo from '@assets/github.svg'
import gitlabLogo from '@assets/gitlab.svg'

function RepoCard() {
    return (
        <>
            <div>
                <IconRef logo={githubLogo} type="github" url="https://github.com/viktorchernikov/codeigniter-vite-react-boilerplate"/>
                <IconRef logo={gitlabLogo} type="gitlab" url="https://gitlab.com/viktorchernikov/codeigniter-vite-react-boilerplate"/>
            </div>
            <h1>Contributing</h1>
            <p>
            Help me improve this project, visit my repository!
            </p>
        </>
    )
}

export default RepoCard;