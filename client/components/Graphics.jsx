import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Graphics = (props) => {
  const { categories, projects, timerActivity } = props;

  const totalTimes = {};
  const projectsCopy = projects.slice();
  // const categoriesCopy = categories.slice();
  // const timerActivityCopy = timerActivity.slice();

  for (let projectObj of projectsCopy) {
    projectObj.time_spent = {}
    for (let categoriesObj of categories) {
      totalTimes[categoriesObj.title] = 0
      projectObj.time_spent[categoriesObj.title] = 0
      for (let timesObj of timerActivity) {
        if (timesObj.category_id === categoriesObj._id) {
          totalTimes[categoriesObj.title] = totalTimes[categoriesObj.title] + timesObj.time_spent;
        }
        if (timesObj.category_id === categoriesObj._id && timesObj.project_id === projectObj._id) {
          projectObj.time_spent[categoriesObj.title] = projectObj.time_spent[categoriesObj.title] + timesObj.time_spent;
        }
      }
    }
  }
  console.log('this is totalTimes', totalTimes) // => {Coding: 4000, Debug: 4000, Meetings: 7000, QA: 0, Code Review: 0, Reasearch: 0, Write Documentation: 0, Other: 0}
  console.log('this is projectsCopy', projectsCopy)
  // => { 0:       {_id: 1, title: "Not specified", Coding: 0, Debug: 0, Meetings: 2000, QA: 0, Code Review: 0 Reasearch: 0, Write Documentation: 0, Other: 0,},      1: {_id: 2, title: "Project 1", Coding: 4000, Debug: 4000, Meetings: 5000, QA: 0, Code Review: 0, Reasearch: 0, Write Documentation: 0, Other: 0}       }

  // total time = 15000
  // 4000/15000 * 100 % = width
  const barsWidth = Object.values(totalTimes)
  const barsLabel = Object.keys(totalTimes)
  const total = barsWidth.reduce((acc, curr) => { return acc + curr }, 0)

  const bars = barsWidth.map((barWidth, index) => {

    return barWidth > 0 ? (
      <div className={'bar ' + barsLabel[index]} style={{
        'width': `${barWidth / total * 100}%`,
      }} >{`${Math.round(barWidth / total * 100)}% ${barsLabel[index]}`}</div>
    ) : <div />
  })


  const projectGraphics = Object.values(projectsCopy).map(project => {
    const projectBarsWidth = Object.values(project.time_spent)
    const projectBarsLabel = Object.keys(project.time_spent)
    const projectTotal = projectBarsWidth.reduce((acc, curr) => { return acc + curr }, 0)

    const projectBars = projectBarsWidth.map((projectWidth, index) => {
      return projectWidth > 0 ? (
        <div className={'bar ' + projectBarsLabel[index]} style={{
          'width': `${projectWidth / projectTotal * 100}%`,
        }} >{`${Math.round(projectWidth / projectTotal * 100)}% ${projectBarsLabel[index]}`}</div>
      ) : <div />
    })

    return (
      <div className='projectGraphic'>
        <div>{project.title}</div>
        {projectBars}
      </div>)
  })

  return (
    < div id="graphic">
      {bars}
      {projectGraphics}
    </div>
  );
}

export default Graphics;
