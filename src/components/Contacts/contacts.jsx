import { Item, Button } from "./contacts.styled"

const ContactsList = ({ list, onDeleteContact }) => (
 <ul>
    {list.map(({id, name, number}) => (
         <Item key={id} >
            <p>{name}: {number}</p>
            <Button  type="button" onClick={()=>onDeleteContact(id)}>DELETE</Button>
        </Item>
    ))}
</ul>
 )

export default ContactsList