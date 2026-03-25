import './App.css'
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Rodape from './componentes/Rodape/Rodape';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import ListaTarefas from './paginas/ListaTarefas/ListaTarefas';

const roteador = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial />,
 },
 {
   path: 'lista-produtos',
   element: <ListaProdutos />,
 },
  {
   path: 'lista-tarefas',
   element: <ListaTarefas />,
 },
 {
    path: "*",
    element: <h3>Página não encontrada!!</h3>,
  },
]);


function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={roteador} />
     <Rodape/>
    </>
  );
}

export default App;
