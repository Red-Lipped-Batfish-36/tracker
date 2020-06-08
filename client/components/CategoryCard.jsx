import React, { Component, usestate } from 'react';
import { playTimer, stopTimer } from '../actions/actions';
import { useDispatch } from 'react-redux';

const CategoryCard = (props) => {
  const { info, user, projects, startTimer } = props;

  const dispatch = useDispatch();

  // using all of these because reducer is expecting all of them
  const [isActive, setIsActive] = useState(false);
  const [isProject, setIsProject] = useState('');
  const [isProjectId, setIsProjectId] = useState('');

  function handleOnClickPlay(projectTitle, projectId) {
    setIsProject(projectTitle);
    setIsProjectId(projectId);
    setIsActive(true);
  }

  function handleOnClickStop() {
    setIsProject('');
    setIsProjectId('');
    setIsActive(false);
  }

  function fetchStop() {
    const reqData = {
      time_spent: Date.now() - startTimer,
      updated_at: Date.now(),
      category_id: info.category_id,
      project_id: isProjectId,
      user_id: user.user_id,
    };
    fetch('/api/', {
      method: 'POST',
      header: { 'content-type': 'application/json' },
      body: JSON.stringify(reqData),
    }).then((data) => {
      //dummy data
      data = reqData;
    });
  }

  useEffect(() => {
    let interval = null;
    if (isActive === true && startTimer === 0) {
      let payload = {
        currentProjectName: isProject,
        currentCategoryName: info.title,
        currentProjectId: isProjectId,
        currentCategoryId: info.category_id,
      };
      dispatch(playTimer(payload));
    } else if (isActive === true && startTimer !== 0) {
      let payloadStop = fetchStop(isProject, isProjectId);
      dispatch(stopTimer(payloadStop));
      let payload = {
        currentProjectName: isProject,
        currentCategoryName: info.title,
        currentProjectId: isProjectId,
        currentCategoryId: info.category_id,
      };
      dispatch(playTimer(payload));
    } else {
      let payloadStop = fetchStop(isProject, isProjectId);
      dispatch(stopTimer(payloadStop));
    }
  });

  const projectList = [];
  for (let i = 0; i < projects.length; i++) {
    projectList.push(
      <div className="project">
        {projects[i].title}
        {isActive ? (
          <button className="stop" onClick={handleOnClickStop}>
            Stop
          </button>
        ) : (
          <button
            className="play"
            onClick={() => {
              handleOnClickPlay(projects[i].title, projects[i].id);
            }}
          >
            Play
          </button>
        )}
      </div>
    );
  }
  return (
    <div className="categoryCard">
      <h2>{info.title}</h2>
      {projectList}
    </div>
  );
};

export default CategoryCard;
