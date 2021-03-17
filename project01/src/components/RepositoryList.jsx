import RepositoryItem from "./RepositoryItem"

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
};

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
};

export default RepositoryList;
