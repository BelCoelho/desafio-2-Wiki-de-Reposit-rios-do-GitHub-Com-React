import React from 'react'
import { ItemConteiner } from './styles'
import user from '../../pages/App';
import reposi from '../../pages/App';


// ItemRepo.js
function ItemRepo({ repo, handleRemoveRepo }) {
  return (
    <ItemConteiner>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      {/*<a href={`https://github.com/${user}/${reposi}`} className="verRepositorio" target="_blank">Ver Repositório</a>*/}
      <br />
      <button onClick={() => handleRemoveRepo(repo.id)}>Remover</button>
      <hr />
    </ItemConteiner>
  );
}

export default ItemRepo