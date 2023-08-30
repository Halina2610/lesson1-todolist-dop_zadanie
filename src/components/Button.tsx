


type PropsType = {
    name: string
    callback: () => void

}

export const Button = (props: PropsType) => {
    const onClickhandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickhandler}>{props.name}</button>
    )
}