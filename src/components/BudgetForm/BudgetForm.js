import React, {Component} from 'react'

class BudgetForm extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="budget">Enter your expected budget ($): </label>
        <input 
          type="text" 
          className="form-control" 
          id="budget"  
          {...this.props}
        />
      </div>
    )
  }
}
export default BudgetForm