import "./projects.css"
import ProjectCart from "../projectCart/ProjectCart"
import python from "../../assets/pygame.png"
import reactimg from "../../assets/react.png"
import javafx from "../../assets/javafx.png"
import godot from "../../assets/godot.png"
import unity from "../../assets/unity.svg"


const Projects = () => {
  
  return (
    <div className='site__projects'>
      <h3> my projects </h3>
      <div className='site__projects-text'>
        <ProjectCart key="proj0" title="VRGeol" text={["vr app dedicated to learning fundamentals notions in geology, please check out the video !"]} img={ unity } link="https://youtu.be/sjmmVGS4ijc" button={true}/>
        <ProjectCart key="proj1" title="Feel like Water" text={["vr and multi-sensorial experience as a class project, please check out the video !"]} img={ unity } link="https://youtu.be/z_PkTBBmL6U"  button={true}/>
        <ProjectCart key="proj2" title="PokéViewer" text={["pokémon themed website written in React JS",<br key="1"/> ,"you can check it out ", <a key="2" href="https://poke.alexciorascu.com" target="_blank" rel='noreferrer'>here</a>]} img={reactimg} link="https://github.com/sukaizer/pokeviewer"/>
        <ProjectCart key="proj3" title="Mobipic" text={["basic photo editor written in Java using JavaFx"]} img={ javafx } link="https://github.com/sukaizer/Mobipic"/>
        <ProjectCart key="proj4" title="Perudo" text={["perudo board game written in Java using JavaFx"]} img={ javafx } link="https://github.com/sukaizer/Perudo"/>
        <ProjectCart key="proj5" title="Sweet Night Declaration" text={["bullet hell game project written in python using pygame graphic library"]} img={ python } link="https://github.com/sukaizer/Sweet-Night-Declaration"/>
        <ProjectCart key="proj6" title="BirdScape" text={["mockup game of FlappyBird realized with Godot game engine"]} img={ godot } link="https://github.com/sukaizer/BirdScape"/>
      </div>
    </div>
  )
}

export default Projects