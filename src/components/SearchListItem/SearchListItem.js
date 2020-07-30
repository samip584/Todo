import React, {Component} from 'react'
import './SearchListItem.css';
class SearchListItem extends Component{
 
  
  render(){
    return(
      <li className = "search__content clearfix">
        <div className = "search__text">{this.props.task}</div>
        <div className = "search__status">{this.props.status}</div>
      </li>
    );
  }
}

export default SearchListItem;