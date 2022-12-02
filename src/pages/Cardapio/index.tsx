import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <section>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__title}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
          <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </div>
      </section>
    </section>
  );
}
