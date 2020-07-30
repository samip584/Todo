import React, {Component} from 'react'
import SearchListItem from '../SearchListItem/SearchListItem'
import './Nav.css';


class Nav extends Component{
  constructor(){
    super();
    this.state ={
      searchList: {todo : [],
                    inProcess : [],
                    done : [],
                  },
      showIcon : true,
    }
  }

  renderIcon = () =>{
    console.log(this.state.showIcon)
    if(this.state.showIcon)
      return(<i className="fa fa-search nav__search"/>);

    else  
      return(<i className="fa fa-close nav__close"/>);;
  }

  searchList = (value) =>{
    let listSearched = {todo : [],
      inProcess : [],
      done : [],
    }
    if(value != ""){
      listSearched.todo = this.props.table.todo.filter(task => task.toLowerCase().includes(value.toLowerCase()))
      listSearched.inProcess = this.props.table.inProcess.filter(task => task.toLowerCase().includes(value.toLowerCase()))
      listSearched.done = this.props.table.done.filter(task => task.toLowerCase().includes(value.toLowerCase()))
    }
    this.setState({
      searchList: listSearched,
    })
  }
  renderSearchList(){
    return(
      <ul className="search-list">
        {
          this.state.searchList.todo.map((task, index) => {
            return <SearchListItem  key = {index} task = {task} status = "To Do"/>
          })
        }
        {
          this.state.searchList.inProcess.map((task, index) => {
            return <SearchListItem  key = {index} task = {task} status = "In Process"/>
          })
        }
        {
          this.state.searchList.done.map((task, index) => {
            return <SearchListItem  key = {index} task = {task} status = "Done"/>
          })
        }
      </ul>
    )
  }

  render(){
    return(
      <div className = "navigation-bar">
        <div className = "navigation-bar__container center clearfix">
          <div className = "Birallo">
          Birallo
          </div>
          <div className="navigation-bar__search__div clearfix">
            <input onFocus = {(e) => {
                e.preventDefault();
                this.setState({showIcon: false})
              }}
              onBlur = {(e) => {
                e.preventDefault();
                this.setState({showIcon: true})
                this.setState({
                  searchList:{todo : [],
                              inProcess : [],
                              done : [],},
                })
              }}
              onChange = {(e) => {
                e.preventDefault();
                this.searchList(e.target.value)
              }}  className="navigation-bar__search" />
            {this.renderIcon()}
            {this.renderSearchList()}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;