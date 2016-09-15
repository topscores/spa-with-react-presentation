// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
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
  traditionArch: require("../assets/tradition.png"),
  ajaxArch: require("../assets/ajax.png"),
  spaArch: require("../assets/spa.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const highlight = "#61dafb";
const dark = "#3d3d3d";
const theme = createTheme({
  primary: highlight
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={dark}>
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
          <Slide transition={["slide"]}>
            <Heading size={1} caps fit textColor="white" textFont="primary">
              Let's talk about history
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor={dark}>
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Traditional web application
            </Heading>
            <Layout>
              <Image src={images.traditionArch.replace("/", "")} margin="0px auto 20px" height="500px"/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor={dark}>
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              With the help of AJAX
            </Heading>
            <Layout>
              <Image src={images.ajaxArch.replace("/", "")} margin="0px auto 20px" height="500px"/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor={dark}>
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Single Page Application
            </Heading>
            <Layout>
              <Image src={images.spaArch.replace("/", "")} margin="0px auto 20px" height="500px"/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor={dark}>
            <Heading size={1} fit caps margin="0 auto 50px" textColor="primary">
              Programming before it was cool
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
