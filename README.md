1. npx create-react-app project name.
2.cd project name
3.npm start

Ques => what mean by React component?
2.diffrent part of a website is a thought  of component.
for example => inside navbar there is logo,home contact,about us these are one component.

1.devlop a website in component.
2.reuseablity of component

2.App.js => is the main showing all the components on the web page.component coming from diff. diff. files  to the App.js.
3.we will modify app.js only to make our project.

4.the structure of a React file =>extention of this file is .js and .jsx both are same. in react file we can write (Js+HTML).

5.before the function we do import components.

6.after function or return we write here javascript part.

7.inside the  return we write html part.

8.import './App.css';

=> import part.

function App() {

    => javascript part.

  return (
    <div className="App">

    => HTML part

    </div>
  );
}

export default App;

9.inside return ,you can only return tag.

10.inside return we can only return 1 div .inside one div we can add many tags and div also for example =>

return (
    <div className="App">

    <div>
         <div>
            <h1>....</h1>
            <p>.....</p>
         </div>
          
          <div>
            <h1>....</h1>
            <p>.....</p>
          </div>

    </div>

    </div>
  );

  ak div ke andar hum kitna vi or div or tag laga sakte hai pe alag alag div nahi laga sakte .agar hum sigle single div likhenge seprately tab compiler sirf ak div ko return karega .


  11.Js Part => create a variable and store  some text in it and then show that text in the heading of the page.

  12.Anything of javascript if i want to write in section 3 (in html section) i have to always write in 
  {javascript things}

  13.this kind of passing value from parent to the child is known as passing of props.
  this is syntex.
  <Home heading = {heading}/>

  14. App.js (parents) , Home.js(child) ,uuu is variable ,abcd is props.

  15. index.js(king file first prepfrence then 1st), App.js(2nd),components (3rd priority).
  isi tarah style me bhi yahi rule follow hota hai :- index.css(1st),App.css(2nd),Styles(3rd).

  16. index.css :- me hum likhenge agar background me koi changing lanan ho to background color dena ho center me lana ho to. 
