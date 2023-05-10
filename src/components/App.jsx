import { Component } from 'react';
import PropTypes from 'prop-types'
import Form from './Form/form';
import ContactsList from './Contacts/contacts';
import Filter from './Filter/filter';

class App extends Component {
  
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedCotacts = JSON.parse(contacts)
    if (parsedCotacts) {
      this.setState({contacts: parsedCotacts})
    }
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
}
  
  ifExsistContact = dataName => {
    const { contacts } = this.state
    return contacts.find(({name}) => name === dataName)
  }
  addContacts = data => {
    this.ifExsistContact(data.name) ? alert(`${data.name} is already in contacts`):
    this.setState(({ contacts }) => {
      const cont = [...contacts];
      cont.push(data);
      return {
        contacts: cont,
      };
    });
  };
  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }
  filteredContacts = () => {
    const { filter, contacts } = this.state
    const normalisedContscts = filter.toLowerCase()
    return contacts.filter(({name}) => name.toLowerCase().includes(normalisedContscts))
  }
  onDeleteContact = (cotactId) => {   
    this.setState(({contacts}) => ({
      contacts: contacts.filter(({id}) => id !== cotactId)
    }))
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts()
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList list={filteredContacts} onDeleteContact={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  state: PropTypes.exact({
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  }),
}