import filtros from './filtros.json';
import styles from './Filtros.module.scss'

type IOption = typeof filtros[0]

export default function Filtros () {
  function selecionarFiltro (filtro: IOption) {

  }
  return (
    <div  className={styles.filtros}>
      {filtros.map((option) => (
        <button 
          className={styles.filtros__filtro}
          key={option.id}
          onClick={() => selecionarFiltro(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}