import LinkButton from "@components/LinkButton";

function HelloCard() {
    return (
        <div className="card">
            <LinkButton text="Contribute" url="welcome/contributing"/>
            <p className="subtext">
            Click on the logos to learn more
            </p>
        </div>
    )
}

export default HelloCard;