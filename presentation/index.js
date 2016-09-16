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
  step1Png: require("../assets/step1/step1.png"),
  traditionArch: require("../assets/tradition.png"),
  ajaxArch: require("../assets/ajax.png"),
  spaArch: require("../assets/spa.png")
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
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Image src={images.reactLogo.replace("/", "")} margin="0px auto 20px" height="250px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              React and Redux
            </Heading>
            <Heading size={1} fit caps>
              Single Page Application Development
            </Heading>
            <Text textSize="1.2em" margin="50px 0px 0px" bold textColor="primary">Software Freedom Day 2016 - Bangkok</Text>
            <Text textSize="1.2em" margin="10px 0px 0px" bold textColor="primary">Kasetsart University Bangkhen</Text>
            <Text textSize="1.2em" margin="50px 0px 0px" bold textColor="white">Arnupharp Viratanapanu</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading margin="0 auto 30px" size={1} caps textColor="primary">
              Let's start
            </Heading>
            <Appear>
              <Text textAlign="left">
                <Code textAligh="left" textSize={28} textColor="white">
                  git clone git@github.com:topscores/todo-react-redux.git
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textAligh="left" textSize={28} textColor="white">
                  cd todo-react-redux
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textSize={28} textColor="white">
                  npm install
                </Code>
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                <Code textSize={28} textColor="white">
                  npm start
                </Code>
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "slide"]}>
            <Heading size={1} margin="0 auto 30px" textColor="white">
              Hello, todos!!!
            </Heading>
            <Image src={images.step1Png.replace("/", "")} margin="0px auto 20px" height="400px"/>
          </Slide>
          <CodeSlide
            transition={["zoom"]}
            lang="js"
            code={require("raw!../assets/step1/.babelrc.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 6], title: ".babelrc" },
              { loc: [2, 3], title: ".babelrc" },
              { loc: [3, 4], title: ".babelrc" }
            ]}
          />
          <CodeSlide
            transition={["zoom"]}
            lang="js"
            code={require("raw!../assets/step1/webpack.config.js.example")}
            margin="20px auto"
            ranges={[
              { loc: [0, 17], title: "webpack.config.js" },
              { loc: [1, 2], title: "application entry point" },
              { loc: [2, 5], title: "bundle dependencies to bundle.js" },
              { loc: [7, 11], title: "load .jsx using babel-loader" },
              { loc: [11, 15], title: "load .css using css-loader and style-loader" }
            ]}
          />
          <Slide transition={["slide"]}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Let's talk about history
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Traditional web application
            </Heading>
            <Layout>
              <Image src={images.traditionArch.replace("/", "")} margin="0px auto 20px" height="500px"/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              With the help of AJAX
            </Heading>
            <Layout>
              <Image src={images.ajaxArch.replace("/", "")} margin="0px auto 20px" height="500px"/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Single Page Application
            </Heading>
            <Layout>
              <Image src={images.spaArch.replace("/", "")} margin="0px auto 20px" height="500px"/>
            </Layout>
          </Slide>
          <Slide textAlign="top" transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Programming before it was cool
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
