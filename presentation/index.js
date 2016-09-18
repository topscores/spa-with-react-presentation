// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reactLogo: require("../assets/react-logo.png"),
  avatar: require("../assets/avatar.png"),
  todo: require("../assets/todo.png"),
  transpile: require("../assets/step1/transpile.png"),
  bundlemodule: require("../assets/step1/bundlemodule.png"),
  index: require("../assets/index.png"),
  traditionArch: require("../assets/tradition.png"),
  ajaxArch: require("../assets/ajax.png"),
  spaArch: require("../assets/spa.png"),
  structure: require("../assets/structure.png"),
  step1Png: require("../assets/step1/step1.png"),
  step20: require("../assets/step2/step2-0.png"),
  step21: require("../assets/step2/step2-1.png"),
  step22: require("../assets/step2/step2-2.png"),
  step23: require("../assets/step2/step2-3.png"),
  step24: require("../assets/step2/step2-4.png"),
  step25: require("../assets/step2/step2-5.png"),
  step26: require("../assets/step2/step2-6.png"),
  step30: require("../assets/step3/step3-0.png"),
  step31: require("../assets/step3/step3-1.png"),
  step32: require("../assets/step3/step3-2.png"),
  step33: require("../assets/step3/step3-3.png"),
  step34: require("../assets/step3/step3-4.png"),
  step35: require("../assets/step3/step3-5.png"),
  problem0: require("../assets/step4/problem0.png"),
  problem1: require("../assets/step4/problem1.png"),
  problem2: require("../assets/step4/problem2.png"),
  statemgt0: require("../assets/step4/statemanagement0.png"),
  statemgt1: require("../assets/step4/statemanagement1.png"),
  redux0: require("../assets/step4/redux0.png"),
  redux1: require("../assets/step4/redux1.png"),
  redux2: require("../assets/step4/redux2.png"),
  redux3: require("../assets/step4/redux3.png"),
  redux4: require("../assets/step4/redux4.png"),
  redux5: require("../assets/step4/redux5.png"),
  redux6: require("../assets/step4/redux6.png"),
  redux7: require("../assets/step4/redux7.png"),
  redux8: require("../assets/step4/redux8.png"),
  redux9: require("../assets/step4/redux9.png"),
  vdom: require("../assets/step3/vdom.png")
};

preloader(images);

const primaryText = "#61dafb";
const primaryBg = "#3d3d3d";
const theme = createTheme({
  primary: primaryText,
  secondary: primaryBg
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Image src={images.reactLogo.replace("/", "")} margin="0px auto 20px" height="200px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              React and Redux
            </Heading>
            <Heading size={1} fit caps>
              Single Page Application Development
            </Heading>
            <Text textSize="1.2em" margin="40px 0px 0px" bold textColor="primary">Software Freedom Day 2016 - Bangkok</Text>
            <Text textSize="1.2em" margin="10px 0px 0px" bold textColor="primary">Kasetsart University Bangkhen</Text>
            <Text textSize="1.2em" margin="40px 0px 0px" bold textColor="white">Arnupharp Viratanapanu</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={3} margin="0 auto 30px" textColor="primary">
              Me
            </Heading>
            <Image src={images.avatar.replace("/", "")} />
            <Text margin="0 20px" textColor="white" textSize={40}>Arnupharp Viratanapanu (Top)</Text>
            <Text margin="0 20px" textColor="white" textSize={40}>Co-founder Larngear Technology / Streaming</Text>
            <Text margin="0 20px" textColor="white" textSize={40}>Thai Programmer Association</Text>
            <Text margin="0 20px" textColor="white" textSize={40}>github.com/topscores</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              What will we do today?
            </Heading>
            <Image src={images.todo.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Let's talk about history
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Traditional web application
            </Heading>
            <Image src={images.traditionArch.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              With the help of AJAX
            </Heading>
            <Image src={images.ajaxArch.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Single Page Application
            </Heading>
            <Image src={images.spaArch.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} margin="0 auto 30px" textColor="white">
              Basic ES6
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} margin="0 auto 30px" textColor="primary">
              Arrow function
            </Heading>
            <Layout>
              <Fill>
                <Text margin={20}>
                  <Text textAlign="left" textSize={28} textColor="white" margin="0 auto 15px">ES6</Text>
                  <CodePane
                    lang="js"
                    textSize={20}
                    source={require("raw!../assets/step1/arrowfunction.example")}
                  />
                </Text>
              </Fill>
              <Fill>
                <Text margin={20}>
                  <Text textAlign="left" textSize={28} textColor="white" margin="0 auto 15px">ES5</Text>
                  <CodePane
                    lang="js"
                    textSize={20}
                    source={require("raw!../assets/step1/function.example")}
                  />
                </Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} margin="0 auto 30px" textColor="primary">
              ES6 Module
            </Heading>
            <Layout>
              <Fill>
                <Text margin={20}>
                  <Text textAlign="left" textSize={28} textColor="white" margin="0 auto 15px">./lib/math.js</Text>
                  <CodePane
                    lang="js"
                    textSize={20}
                    source={require("raw!../assets/step1/es6.export.example")}
                  />
                </Text>
              </Fill>
              <Fill>
                <Text margin={20}>
                  <Text textAlign="left" textSize={28} textColor="white" margin="0 auto 15px">app.js</Text>
                  <CodePane
                    lang="js"
                    textSize={20}
                    source={require("raw!../assets/step1/es6.import.example")}
                  />
                </Text>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading fit size={1} margin="0 auto 30px" textColor="white">
              Environment setup
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} margin="0 auto 30px" textColor="primary">
              Transpile
            </Heading>
            <Image src={images.transpile.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} margin="0 auto 30px" textColor="primary">
              Bundle module
            </Heading>
            <Image bgColor="white" src={images.bundlemodule.replace("/", "")} margin="0px auto 20px" width="80%"/>
            <Text textColor="white">https://webpack.github.io/docs/usage.html</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading margin="0 auto 30px" size={1} caps textColor="primary">
              Project setup
            </Heading>
            <Appear>
              <Text textAlign="left">
                <Code textAligh="left" textSize={26} textColor="white">
                  npm init
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textAligh="left" textSize={26} textColor="white">
                  npm install -S react react-dom
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textAligh="left" textSize={26} textColor="white">
                  npm install -D babel-preset-es2015 babel-preset-react
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textAligh="left" textSize={26} textColor="white">
                  npm install -D webpack webpack-dev-server babel-loader style-loader css-loader
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textSize={26} textColor="white">
                  touch .babelrc
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textSize={26} textColor="white">
                  touch webpack.config.js
                </Code>
              </Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step1/.babelrc.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 6], title: ".babelrc" },
              { loc: [2, 3], title: "to transpile es6" },
              { loc: [3, 4], title: "to transpile jsx" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step1/webpack.config.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 17], title: "webpack.config.js" },
              { loc: [1, 2], title: "application entry point" },
              { loc: [2, 5], title: "bundle dependencies to bundle.js" },
              { loc: [7, 11], title: "set loader for .js/.jsx" },
              { loc: [11, 15], title: "set loader for .css" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} margin="0 auto 30px" textColor="primary">
              index.html
            </Heading>
            <Image bgColor="white" src={images.index.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit textColor="primary" margin={40}>
              Start development server with livereload
            </Heading>
            <Code textAlign="left" textColor="white">
              webpack-dev-server --inline
            </Code>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit textColor="primary" margin={40}>
              Build bundle for deployment
            </Heading>
            <Code textAlign="left" textColor="white">
              webpack
            </Code>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit margin="0 auto 30px" textColor="white">
              Let's start our TodoApp
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading fit margin="0 auto 30px" size={1} caps textColor="primary">
              Clone starter repository
            </Heading>
            <Appear>
              <Text textAlign="left">
                <Code textAlign="left" textSize={20} textColor="white">
                  git clone https://github.com/topscores/todo-react-redux.git
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textAlign="left" textSize={20} textColor="white">
                  cd todo-react-redux
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textSize={20} textColor="white">
                  npm install
                </Code>
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              step1: Render static component
            </Heading>
            <Appear>
              <Text textAlign="left" margin="0 auto 20px">
                <Code textColor="white">git checkout step1</Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textColor="white">npm start</Code>
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} margin="0 auto 30px" textColor="white">
              Hello, todos!!!
            </Heading>
            <Image src={images.step1Png.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} margin="0 auto 30px" textColor="white">
              Directory structure
            </Heading>
            <Image src={images.structure.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step1/TodoApp.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 12], title: "./components/TodoApp.js" },
              { loc: [0, 1], title: "import React and Component" },
              { loc: [1, 2], title: "import style" },
              { loc: [3, 4], title: "Create class extends from Component" },
              { loc: [4, 11], title: "Implment render function" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step1/index.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 5], title: "./index.js" },
              { loc: [0, 2], title: "import React and ReactDOM" },
              { loc: [2, 3], title: "import TodoApp component" },
              { loc: [4, 5], title: "render to react-root" }
            ]}
          />
          <Slide bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              step2: Compose multiple components
            </Heading>
            <Appear>
              <Text textAlign="left" margin="0 auto 20px">
                <Code textColor="white">git checkout step2</Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textColor="white">npm start</Code>
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              React is about composing components
            </Heading>
            <Image src={images.step20.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              React is about composing components
            </Heading>
            <Image src={images.step21.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              React is about composing components
            </Heading>
            <Image src={images.step22.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              React is about composing components
            </Heading>
            <Image src={images.step23.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              React is about composing components
            </Heading>
            <Image src={images.step24.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              React is about composing components
            </Heading>
            <Image src={images.step25.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              React is about composing components
            </Heading>
            <Image src={images.step26.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step2/TodoApp.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 6], title: "TodoApp" },
              { loc: [2, 4], title: "Import child components" },
              { loc: [6, 15], title: "Render function" },
              { loc: [10, 12], title: "Add child components" },
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step2/TodoInput.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 9], title: "TodoInput" },
              { loc: [3, 8], title: "Render function" },
              { loc: [4, 7], title: "Render input with placeholder" },
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step2/TodoList.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 4], title: "TodoList" },
              { loc: [4, 9], title: "Dummy todo for testing" },
              { loc: [9, 12], title: "For all todos in array" },
              { loc: [12, 13], title: "Render TodoItem for all todos" },
              { loc: [10, 15] }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step2/TodoItem.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 3], title: "TodoItem" },
              { loc: [3, 12], title: "Render function" },
              { loc: [5, 6], title: "Render css class according to status" },
              { loc: [5, 7], title: "Check box for showing status" },
              { loc: [5, 8], title: "Show todo from this.props" },
              { loc: [5, 10], title: "Delete todo button" },
            ]}
          />
          <Slide bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              step3: Manipulate component's state
            </Heading>
            <Appear>
              <Text textAlign="left" margin="0 auto 20px">
                <Code textColor="white">git checkout step3</Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textColor="white">npm start</Code>
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Dataflow in React
            </Heading>
            <Image src={images.step30.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Dataflow in React
            </Heading>
            <Image src={images.step31.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Dataflow in React
            </Heading>
            <Image src={images.step32.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Dataflow in React
            </Heading>
            <Image src={images.step33.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Dataflow in React
            </Heading>
            <Image src={images.step34.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Dataflow in React
            </Heading>
            <Image src={images.step35.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} caps margin="0 auto 30px" textColor="white">
              Virtual DOM
            </Heading>
            <Image src={images.vdom.replace("/", "")} margin="0px auto 20px"  width="80%"/>
            <Text textColor="secondary" fit>https://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html</Text>
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step3/TodoApp.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 6], title: "TodoApp" },
              { loc: [6, 8], title: "Add constructor" },
              { loc: [6, 12], title: "Init state" },
              { loc: [17, 24], title: "addTodo callback" },
              { loc: [50, 55], title: "updateNewTodo callback" },
              { loc: [12, 13], title: "bind this to addTodo" },
              { loc: [15, 16], title: "bind this to updateNewTodo" },
              { loc: [59, 63], title: "pass addTodo to TodoInput" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step3/TodoInput.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 3], title: "TodoInput" },
              { loc: [20, 30], title: "Render function" },
              { loc: [26, 28], title: "Add event handler" },
              { loc: [8, 11], title: "onChange Handler" },
              { loc: [11, 12], title: "onKeyDown Handler" },
              { loc: [12, 16], title: "if not enter do nothing" },
              { loc: [16, 19], title: "otherwise call addTodo" },
              { loc: [3, 8], title: "bind this to handlers" },
            ]}
          />
          <Slide bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              step4: Manage state with Redux
            </Heading>
            <Appear>
              <Text textAlign="left" margin="0 auto 20px">
                <Code textColor="white">git checkout step4</Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textColor="white">npm start</Code>
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Manage state is difficult
            </Heading>
            <Image src={images.problem0.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Manage state is difficult
            </Heading>
            <Image src={images.problem1.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Manage state is difficult
            </Heading>
            <Image src={images.problem2.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              State management in React
            </Heading>
            <Image src={images.statemgt0.replace("/", "")} margin="0px auto 20px" width="80%"/>
            <Text textColor="white">https://css-tricks.com/learning-react-redux/</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              State management in Redux
            </Heading>
            <Image src={images.statemgt1.replace("/", "")} margin="0px auto 20px" width="80%"/>
            <Text textColor="white">https://css-tricks.com/learning-react-redux/</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux0.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux1.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux2.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux3.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux4.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux5.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux6.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux7.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux8.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide transition={[]} bgColor="white">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Redux architecture
            </Heading>
            <Image src={images.redux9.replace("/", "")} margin="0px auto 20px" width="80%"/>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 30px" textColor="primary">
              Usage with React
            </Heading>
            <Appear>
              <Text textAlign="left" margin="0 auto 20px">
                <Code textColor="white">npm install -S redux</Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textColor="white">npm install -S react-redux</Code>
              </Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step4/actions.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 0], title: "./actions.js" },
              { loc: [0, 6], title: "addTodo action" },
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step4/reducer.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 0], title: "./reducer.js" },
              { loc: [0, 2], title: "Choose what to do based on action" },
              { loc: [2, 3], title: "if action.type=ADD_TODO" },
              { loc: [3, 9], title: "add new action to todos" },
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step4/TodoInput.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 0], title: "TodoInput" },
              { loc: [1, 2], title: "Import connect function" },
              { loc: [2, 3], title: "Import action creator" },
              { loc: [4, 5], title: "Don't export TodoInput just yet" },
              { loc: [34, 39], title: "Map state to props" },
              { loc: [40, 46], title: "Map dispatch to props" },
              { loc: [47, 48], title: "Connect with store" },
              { loc: [24, 30], title: "Same render code" },
              { loc: [10, 13], title: "Same event handler" },
              { loc: [13, 22]},
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/step4/index.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 0], title: "./index.js" },
              { loc: [3, 4], title: "Import creatStore function" },
              { loc: [4, 5], title: "Import Provider component" },
              { loc: [5, 6], title: "Import reducer" },
              { loc: [7, 11], title: "Create store and init state" },
              { loc: [11, 16], title: "Wrap root component with Provider" },
              { loc: [16, 17], title: "Render wrapped component"}
            ]}
          />
          <Slide bgColor="secondary">
            <Heading size={1} caps margin="0 auto 30px" textColor="primary">
              Q & A
            </Heading>
            <Heading size={1} fit caps margin="0 auto 30px" textColor="white">
              Thank you for listening
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
