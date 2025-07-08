import {Link} from 'react-router-dom'


const Home = ({data}) => {
  return (
    <>
    <h2>Lista de datos</h2>
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
          <p>Completada: {item.completed ? "Sí" : "No"}</p>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Home;
