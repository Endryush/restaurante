import styles from './Prato.module.scss';
import { useParams, useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPratos from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <button className={styles.voltar} onClick={() => navigate(-1)}>
                {' < Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{prato.title}</h1>
                <div className={styles.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>
                    {prato.description}
                  </p>
                  <TagsPratos {...prato} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
