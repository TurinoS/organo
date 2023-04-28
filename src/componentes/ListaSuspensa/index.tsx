import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string,
    obrigatorio: boolean,
    valor: string,
    itens: string[],
    aoAlterado: (valor: string) => void
}

const ListaSuspensa = ({ aoAlterado, itens, label, obrigatorio, valor }: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={true} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa