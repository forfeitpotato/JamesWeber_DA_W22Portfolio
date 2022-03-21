import './App.css';
import Sample from './components/Sample';

function App() {
  return (
    <div>
      <h1>James Weber De Asis</h1>
      <br/>

      <a href="https://www.dropbox.com/s/q5676qkgzzxbdfa/Resume.pdf?dl=0" className='tabs'>Resume</a> 
      <a href="https://www.dropbox.com/s/0chd3rejnifj9kh/Cover%20Letter.pdf?dl=0 " className='tabs'>Cover letter</a>

      <p>Hello I am James Weber De Asis. I am currently a George Brown College Student studying Computer Programmer Analyst.
        Currently my goal is to keep improving as a programmer and develop skills to someday create a program that will help 
        make people lives easier. 
      </p>

      <p>I believe in the advancement of technology to help improve the lives of people </p>

      <h3>Academic credentials</h3>
      <img src={require("./components/deans_list_1.png")} alt="Dean's List Winter 2020"/>
      <img src={require("./components/deans_list_2.png")} alt="Dean's List Spring 2021"/>
      <img src={require("./components/deans_list_3.png")} alt="Dean's List Fall 2021"/>
      <img src={require("./components/deans_list_4.png")} alt="Dean's List Winter 2021"/>
      <img src={require("./components/deans_list_5.png")} alt="Dean's List Fall 2021"/>

      <h2>Academic Work</h2>
      <Sample title="GraphQL" description="Create a backend API using Node, Mongoose, Express and GraphQL. Demonstrate basics of Javascript and knowledge of
      basic API. Created a postman json file for easier API testing" link="https://github.com/forfeitpotato/COMP3133_Assignment1"/>
      <Sample title="Weather App Final Project" description="Collaborate with classmates using Github and Android Studio to create 
      a Weather Mobile Application that communicates with OpenWeather Map Org API. Setup the Weather Class which is responsible for fetching the data from
      the API and rendering the information base on the weather of today and the next 6 days" link="https://github.com/C-CalvinNguyen/COMP3074_Final_Project29"/>
      <Sample title="Data Structures Assignment 2" description="Work with Sehaj and Aman to create a basic equipment shop menu 
      and player interactions in a game displayed coded using Java. Demonstrate basics of Java and knowledge of hash functions to make searching for objects 
      in an array quicker" link="https://github.com/forfeitpotato/COMP2080Assignment2"/>
      <Sample title="Simple Weather Website" description="Create a simple weather website using Node, Express and React. Communicate with OpenWeather Map
      Org API and display information using React" link="https://github.com/forfeitpotato/101299435_comp3123_-labtest2"/>
      <Sample title="Tic Tac Toe" description="Create Tic Tac Toe with MVC principles using C#. Professor aided with the logic and structure of the website.
      Display basic understanding of C# syntax and logic" link="https://github.com/forfeitpotato/COMP2139Lab9"/>
      <Sample title="Capstone Project" description="Currently working on a Music Streaming System with Mobile Music Player Application using MEAN Stack with Ionic.
      Current contributions involve planning of the systems and creating the playlist and rating backend. For more info about the Capstone Project vist the github link
      which contains a readme file with all information" link="https://github.com/C-CalvinNguyen/Capstone_Project"/>
    </div>
  );
}

export default App;
