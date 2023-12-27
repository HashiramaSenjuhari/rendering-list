import React, { Component } from 'react';

class HigherOrderFunctions extends Component {
  state = {
    userData: [
      { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
      { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
      { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
      { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
      { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
    ]
  }

  renderItems = () => {
    return this.state.userData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name: {item.name}</span>
        <span>User Type: {item.user_type}</span>
        <span>Years: {item.years}</span>
      </li>
    ));
  }
  

  filterDataByUserType = (userType) => {
    const filteredData = this.state.userData.filter((user) => user.user_type === userType)
    return filteredData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name: {item.name}</span>
        <span>User Type: {item.user_type}</span>
        <span>Years: {item.years}</span>
      </li>
    ))
  }

  filterNamesStartingWithJ = () => {
    const filteredData = this.state.userData.filter((user) => user.name.startsWith('J'))
    return filteredData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name: {item.name}</span>
        <span>User Type: {item.user_type}</span>
        <span>Years: {item.years}</span>
      </li>
    ))
  }

  filterDataByAge = (minAge, maxAge) => {
    const filteredData = this.state.userData.filter((user) => user.age > minAge && user.age <= maxAge)
    return filteredData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name: {item.name}</span>
        <span>User Type: {item.user_type}</span>
        <span>Years: {item.years}</span>
      </li>
    ))
  }

  getTotalExperienceOfDesigners = () => {
    const designersData = this.state.userData.filter((user) => user.user_type === 'Designer');
    const totalExperience = designersData.reduce((total, user) => total + user.years, 0);
    return <div>Total Experience of Designers: {totalExperience} years</div>;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        <h1>filter Data by UserType (Developer)</h1>
        <div className="display-box">
          <ul>{this.filterDataByUserType('Developer')}</ul>
        </div>

        <h1>filter Names Starting with 'J'</h1>
        <div className="display-box">
          <ul>{this.filterNamesStartingWithJ()}</ul>
        </div>

        <h1>filter Data by Age (28-50)</h1>
        <div className="display-box">
          <ul>{this.filterDataByAge(28, 50)}</ul>
        </div>

        <h1>Total Experience of Designers</h1>
        <div className="display-box">{this.getTotalExperienceOfDesigners()}</div>
      </React.Fragment>
    );
  }
}

export default HigherOrderFunctions;

