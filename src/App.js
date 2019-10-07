import React, { Component } from "react";
import "./App.css";
import foods from "./data/foods.json";
import FindFood from "./components/FindFood";
import SearchedFood from "./components/SearchedFood";
import AddFood from "./components/DynamicList/AddFood";

class App extends Component {
  state = {
    allFood: [...foods],
    searchedFood: [...foods],
    form: "",
    visible: true,
    visibleSearchNFindFood: true
  };

  handleHideShowFood = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  handleOnOffvisibleSearchNFindFood = () => {
    const { visibleSearchNFindFood } = this.state;
    this.setState({ visibleSearchNFindFood: !visibleSearchNFindFood });
  };

  HandleSearch = value => {
    console.log(value);
    const { allFood, form } = this.state;
    this.setState({ form: value });
    if (form === "") {
      this.setState({ searchedFood: [...allFood], form: "" });
    } else {
      const newState = [...allFood].filter(food => {
        return food.name.toLowerCase().includes(form.toString().toLowerCase());
      });
      this.setState({ searchedFood: [...newState] });
    }
  };

  render() {
    const { form, searchedFood, visible, visibleSearchNFindFood } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-h1">IronNutrition</h1>

          {/*This is form and button component */}
          {visible ? (
            <div>
              <AddFood onoffShowFood={this.handleOnOffvisibleSearchNFindFood} />
              {/* This is a Search Food Bar*/}
              {visibleSearchNFindFood ? (
                <div>
                  <FindFood myFunction={this.HandleSearch} valueForm={form} />
                  {/*This is a Searched Food Map */}
                  <SearchedFood sfood={searchedFood} />
                </div>
              ) : null}
            </div>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
