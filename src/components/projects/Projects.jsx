import "./projects.css"
import ProjectCart from "../projectCart/ProjectCart"
import python from "../../assets/pygame.png"
import reactimg from "../../assets/react.png"
import javafx from "../../assets/javafx.png"
import godot from "../../assets/godot.png"
import unity from "../../assets/unity.svg"
import cinema from "../../assets/cinema.png"


const Projects = () => {
  
  return (
    <div className='site__projects'>
      <h3> my projects </h3>
      <div className='site__projects-text'>
        <ProjectCart key="proj0" title="Dress Up !" text={["weather game coded with react + node, dress according to the weather",<br key="1"/> ,"you can check it out ", <a key="2" href="https://weather.alexciorascu.com/" target="_blank" rel='noreferrer'>here</a>]} img={ reactimg } link="https://github.com/sukaizer/Weather"/>
        <ProjectCart key="proj1" title="VRCS" text={["video made for Fundamentals of Extended reality class with cinema 4D and adobe after effects"]} img={ cinema } link="https://youtu.be/-1XI6N2nkgk" button={true}/>
        <ProjectCart key="proj2" title="VRGeol" text={["vr app dedicated to learning fundamentals notions in geology, please check out the video !"]} img={ unity } link="https://youtu.be/sjmmVGS4ijc" button={true}/>
        <ProjectCart key="proj3" title="Feel like Water" text={["vr and multi-sensorial experience as a class project, please check out the video !"]} img={ unity } link="https://youtu.be/z_PkTBBmL6U"  button={true}/>
        <ProjectCart key="proj4" title="PokéViewer" text={["pokémon themed website written in react",<br key="1"/> ,"you can check it out ", <a key="2" href="https://poke.alexciorascu.com" target="_blank" rel='noreferrer'>here</a>]} img={reactimg} link="https://github.com/sukaizer/pokeviewer"/>
        <ProjectCart key="proj5" title="Mobipic" text={["basic photo editor written in Java using JavaFx"]} img={ javafx } link="https://github.com/sukaizer/Mobipic"/>
        <ProjectCart key="proj6" title="Perudo" text={["perudo board game written in Java using JavaFx"]} img={ javafx } link="https://github.com/sukaizer/Perudo"/>
        <ProjectCart key="proj7" title="Sweet Night Declaration" text={["bullet hell game project written in python using pygame graphic library"]} img={ python } link="https://github.com/sukaizer/Sweet-Night-Declaration"/>
        <ProjectCart key="proj8" title="BirdScape" text={["mockup game of FlappyBird realized with Godot game engine"]} img={ godot } link="https://github.com/sukaizer/BirdScape"/>
      </div>
    </div>
  )
}

export default Projects