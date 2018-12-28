import React, { Component } from 'react'
import ReactTable from 'react-table'


export default class UserAddressBook extends Component {
  constructor() {

    super();
    this.state ={
      data:[],
      name: "",
      address: "",
    };
  }

  componentDidMount() {
      // Set a post request & optimisticaly re-render 
     // fetch()
      // .then(res=>res.json())
      // .then(() => {
      // })
      // .catch(console.log);
  }
  handleChange =(e)=>{
    console.log("NAME:", e.target.name,  "VALUE:", e.target.value)
    this.setState({
      [e.target.name]:e.target.value
    }, ()=> console.log(this.state))

  }
  renderEditable = cellInfo => {
    return (
      <div
      style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    )
  };
  render() {
    const { data } = this.state;
    return (
    <div className="address-book-main-div">
  
    <form onSubmit={this.handleSubmit}>
            <h3>Add an Address</h3>

            <label>
            name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>{" "}

            <label>
              Address:
              <input
                type="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </label> 
            <input type="submit" value="Add" />

          </form>

        <div>
          <ReactTable 
            data={data}
            columns={[
              {
                Header: "Name",
                accessor: "name",
                Cell: this.renderEditable
              },

              {
                Header: "Address",
                accessor: "address",
                Cell: this.renderEditable
              },

              {
                Header: "New Address inBook",
                id: "newToBook",
                accessor: d => (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: d.name + " " + d.address
                    }}
                  />
                )
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
    </div>
    )
  }
}
