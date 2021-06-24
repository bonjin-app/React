class ContactInfo extends React.Component {
    render() {
      return (
        <div>
          {this.props.contact.name}
          {this.props.contact.phone}
         </div>
      )
    }
  }
  
  class Contact extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        contactData: [
          {name: 'Abet', phone: '010-0000-0000'},
          {name: 'Betty', phone: '010-0000-0000'},
          {name: 'Charlie', phone: '010-0000-0000'},
          {name: 'Dav', phone: '010-0000-0000'}
        ]
      }
    }
    
    render() {
      const mapToComponent = (data) => {
        return data.map((contact, i) => {
          return <ContactInfo contact={contact} key={i}/>
        })
      }
      
      return (
        <div>
          {mapToComponent(this.state.contactData)}
        </div>
      )
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <div>
          <Contact/>
        </div>
      );
    }
  };
  
  ReactDOM.render(
    <App></App>,
    document.getElementById("root")
  );