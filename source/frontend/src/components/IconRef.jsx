function IconRef(props) {
    return (
        <a href={props.url} target="_blank">
          <img src={props.logo} id={`logo-${props.type}`} className="logo" alt={props.alt} />
        </a>
    )
}

export default IconRef;