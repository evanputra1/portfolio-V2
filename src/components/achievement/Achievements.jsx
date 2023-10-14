import { useState, useEffect } from "react";
import { achievementData, achievementNav } from "./Data";

const Achievements = () => {
    const [item, setItem] = useState({name: 'frontend'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === '') {
            setProjects(achievementData);
        } else {
            const newProjects = achievementData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects)
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index)
    };

  return (
    <div>
        <div className="work__filters">
            {achievementNav.map((item, index) => {
                return (
                    <span onClick={(e) => {
                        handleClick(e, index);
                    }} className={`${active === index ? 'active-work' : ''} work__item`} key={index}>{item.name}</span>
                )
            })}
        </div>

        <div className="work__container container grid">
            {projects.map((item) => {
                return (
                    <div className="work__card" key={item.id}>
                        <img src={item.image} alt="" className="work__img" />
                        <h3 className="work__title">{item.title}</h3>
                    </div>
                )
            })}
        </div>
        <div className="achievement__button">
            <a href="https://www.linkedin.com/in/evan-ananda-putra-056176222/details/certifications/" target="_blank" className="button button--flex" rel="noreferrer">View More</a>
        </div>
    </div>

  )
}

export default Achievements