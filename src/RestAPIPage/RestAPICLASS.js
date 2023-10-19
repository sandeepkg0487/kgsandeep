import React, { Component } from "react";
import axios from 'axios';
import "./RestApiCSS.css";


const url = "http://localhost:8900/profile";
export default class RestAPICLASS extends Component {
  constructor(props) {
    super(props);
    this.state =   {
      profile: "",
  };
  }
  render() {
    console.log("this is data:",this.state.datafromserver);
    return (
   
      <div className="container-fluid p-2">
      <div className="row">
        {this.state.datafromserver?.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-3 ps-3">
            <div className="card card-hover ">
              <img
                src='/Image/sandeep.png'
                className="card-img-top"
                alt={item.name}
                // onClick={() => openDetails(item)}
              />
              <div className="card-body ">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  
    );
  }
  componentDidMount() {
    // Make a GET request to your API endpoint
    axios.get(url)
      .then((response) => {
        this.setState({
          datafromserver: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }
}

