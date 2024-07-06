// utils
import { BASE_URL } from '@utils/constants'

function LinkButton(props) {
    return (
        <a href={`${BASE_URL}/${props.url}`}>
            <button>{props.text}</button>
        </a>
    )
}

export default LinkButton;