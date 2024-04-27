

const List = (props) => {
 
const itemList = props.items;

 const listItems = itemList.map(item => 
        <li key={item.id}>
            {item.name} : &nbsp; 
            
            <b>{item.calories}
                </b> </li>
        )

 return (<ul>{listItems}</ul>)
}

export default List