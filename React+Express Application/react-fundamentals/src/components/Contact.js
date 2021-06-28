
import { Component } from "react";
import ContactInfo from "./ContactInfo";

class Contact extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        keyword: '',
        contactData: [
            {name: 'Charlie', phone: '010-0000-0003'},
            {name: 'Betty', phone: '010-0000-0002'},
            {name: 'Abet', phone: '010-0000-0001'},
            {name: 'Dav', phone: '010-0000-0004'}
        ]
      }

      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            keyword: event.target.value
        })
    }
    
    render() {
      const mapToComponent = (data) => {
        data.sort();
        data = data.filter((contact) => {
                let name = contact.name.toLowerCase();
                return name.indexOf(this.state.keyword) > -1
            }
        )
        return data.map((contact, i) => {
          return <ContactInfo contact={contact} key={i}/>
        })
      }
      
      return (
        <div>
            <h1>Contancts</h1>
            <input name="keyword" 
                placeholder="Search" 
                value={this.state.keyword}
                onChange={this.handleChange}></input>
            {mapToComponent(this.state.contactData)}
        </div>
      )
    }
  }

  export default Contact