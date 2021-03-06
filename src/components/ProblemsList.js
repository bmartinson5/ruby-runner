import React, {Component} from 'react';
import '../css/ProblemsList.css';
import {problems} from '../helpers/default_problems'
import Grid from '@material-ui/core/Grid';

class ProblemsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: problems,
      clickedProblem: 0
    }
  }

  handleProblemSelection = (index) => {
    this.setState({
      clickedProblem: index
    })
    this.props.callback(index);
  }

  render(){
    let bcolor = "white";
    return (
      <div className="problems-list">
        <Grid container>
          <Grid item xs>
          </Grid>
          <Grid item xs={8}>
          <div className="problem1 header">
            <Grid container>
              <Grid item xs={3}>
                Title
              </Grid>
              <Grid item xs={3}>
                Difficulty
              </Grid>
              <Grid item xs={3}>
                Completed?
              </Grid>
              <Grid item xs={3}>
                Has Solution?
              </Grid>
            </Grid>
          </div>
          {this.state.problems.map((problem, index) => (
              <a onClick={() => this.props.loadProblem(index)}>
                  <div className={`problem${index%2}`}>
                    <Grid container>
                      <Grid item xs={3}>
                        {problem["name"]}
                      </Grid>
                      <Grid item xs={3}>
                        {problem["difficulty"]}
                      </Grid>
                      <Grid item xs={3}>
                        {problem["completed"]}
                      </Grid>
                      <Grid item xs={3}>
                        {problem["hasSolution"]}
                      </Grid>
                    </Grid>
                  </div>
              </a>
          ))}
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ProblemsList;
