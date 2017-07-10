import React from 'react';

const Skills = props => {
    let nextLabel = 0;
    const getSkills = [];
    const labelList = ['label-success', 'label-skill2', 'label-skill3'];

    props.skillsData.forEach(function(skill) {
      skill.keywords.map(function(item, index) {
        const label = labelList[nextLabel]; 
        getSkills.push(<li key={skill.name + index}><span className={`label ${label}`}>{item}</span></li>);
       });

       nextLabel++;
       if (nextLabel >= labelList.length) {
         nextLabel = 0;
       }
    });

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Compétences</h2>
        <ul className="skills-list list-inline">{getSkills}</ul>
      </section>
  	)
};

export default Skills;
