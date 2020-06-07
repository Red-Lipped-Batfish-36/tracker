import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryCard from './components/CategoryCard.jsx';
import NavBar from './components/NavBar.jsx';
import TimerModal from './components/TimerModal.jsx';

const mapStateToProps = (state) => ({
  user: state.user,
  projects: state.projects,
  categories: state.categories,
  timerActivity: state.timerActivity,
  currentProjectName: state.currentProjectName,
  currentCategoryName: state.currentCategoryName,
  currentProjectId: state.currentProjectId,
  currentCategoryId: state.currentCategoryId,
  startTimer: state.startTimer,
  endTimer: state.endTimer,
  lastInterval: state.lastInterval,
});

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  logOut: (user) => {
    dispatch(actions.logOut(user));
  },
  playTimer: (currentIds) => {
    dispatch(actions.logOut(currentIds));
  },
  stopTimer: (currentIds) => {
    dispatch(actions.logOut(currentIds));
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryElems = categories.map((info, key) => {
      return (
        <CategoryCard
          key={key}
          info={info}
          user={this.props.user}
          projects={this.props.projects}
          timerActivity={this.props.timerActivity}
          currentProjectName={this.props.ProjectName}
          currentCategoryName={this.props.currentCategoryName}
          currentProjectId={this.props.currentProjectId}
          currentCategoryId={this.props.currentCategoryId}
          startTimer={this.props.startTimer}
          endTimer={this.props.endTimer}
          lastInterval={this.props.lastInterval}
          playTimer={this.props.playTimer}
          stopTimer={this.props.stopTimer}
        />
      );
    });

    return (
      <div>
        <NavBar user={this.props.user} logOut={this.props.logOut} />
        <section className="mainSection">
          <div className="cardsContainer">
            {categoryElems}
            <TimerModal
              currentProjectName={this.props.ProjectName}
              currentCategoryName={this.props.currentCategoryName}
              startTimer={this.props.startTimer}
              endTimer={this.props.endTimer}
              playTimer={this.props.playTimer}
              stopTimer={this.props.stopTimer}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
