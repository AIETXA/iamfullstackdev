import { useParams } from "react-router-dom";

const ItemDetailPage = ({item}) => {
  const { title } = useParams  
  
  if(!item) return <p>Tarea no encontrada</p>
  
  return (
    <>
      <h3>{item.title}</h3>
      <p>Completada: {`${item.completed}`}</p>
    </>
 
  );
};

export default ItemDetailPage;
