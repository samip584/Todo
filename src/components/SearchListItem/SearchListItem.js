import React, {Component} from 'react'
import './SearchListItem.css';
class SearchListItem extends Component{
 
  
  render(){
    return(
      <li className = "search__content clearfix">
        <p className = "search__text">{this.props.task}</p>
        <div className = "search__status">{this.props.status}</div>
      </li>
    );
  }
}

export default SearchListItem;