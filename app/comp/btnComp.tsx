type btnProps = { 
    text: string
}

export default function Button({ text }: btnProps) {

    return (
        <button style={{backgroundColor: "green"}} onClick={() => console.log('wheels start')} >{text}</ button>
    )
}