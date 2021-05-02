import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./sampleIntegrations.scss";

const SampleIntegrations = () => {
  return (
    <div className="sampleIntegrations">
      <div className="sampleIntegrations__steps">
        <div className="sampleIntegrations__steps__step">
          <div className="sampleIntegrations__steps__step__text">
            <div className="sampleIntegrations__steps__step__text__mainTitle">
              Data &amp; Overrides
            </div>
            <div className="sampleIntegrations__steps__step__text__subTitle">
              A way to share data between components within Framer, using code
              overrides.
            </div>
            <div className="sampleIntegrations__steps__step__text__title">
              Incrementing Values
            </div>
            <div className="sampleIntegrations__steps__step__text__pr">
              <p>
                The Data objects behaves like a simple JavaScript object in
                which you can store anything. It updates the user interface of
                your project on every change, and can be used to share data
                between components and Frames. In this example, we’re simply
                changing the text property of any text layer the override gets
                applied to. Learn more about Overrides.
              </p>
              <a href="#">Learn more about Overrides.</a>
            </div>
          </div>
          <div className="sampleIntegrations__steps__step__code">
            <SyntaxHighlighter
              lineNumberStyle={{
                // borderRight: "1px solid #363448",
                paddingRight: 20,
                paddingLeft: 35,
                marginRight: 20,
              }}
              showLineNumbers
              language="jsx"
              style={okaidia}
            >
              {`import { Override, Data } from "framer"

const data = Data({ name: "Ben" })

export function setName(): Override {
  return {
    text: data.name,
  }
}`}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="sampleIntegrations__steps__step">
          <div className="sampleIntegrations__steps__step__text">
            <div className="sampleIntegrations__steps__step__text__title">
              Step 2: Generating an account
            </div>
            <div className="sampleIntegrations__steps__step__text__pr">
              <p>
                Shared colors from your Canvas can also be imported and used in
                Code. In this example, we’re importing a color that we’ve named
                Primary in the Color Picker, and we’re using it to set the
                background of a Frame. Please note that we manage the colors
                using CSS variables, so they can’t be transformed using the
                Color() function at the moment.
              </p>

              <p className="no-margin">
                Note: For prototyping, using code-friendly names is encouraged,
                such as accentColor. If your shared color names do contain
                spaces, you can reference those by using the bracket notation:
                colors["Accent Color"].
              </p>
            </div>
          </div>
          <div className="sampleIntegrations__steps__step__code">
            <SyntaxHighlighter
              lineNumberStyle={{
                // borderRight: "1px solid #363448",
                paddingRight: 20,
                paddingLeft: 35,
                marginRight: 20,
              }}
              showLineNumbers
              language="jsx"
              style={okaidia}
            >
              {`import * as React from "react"
import { Frame, useCycle } from "framer"
import { colors } from "./canvas"

export function MyComponent() {
  const [flip, cycle] = useCycle(
    { backgroundColor: colors.Primary },
    { backgroundColor: colors.Secondary }
  )

  return (
    <Frame
      backgroundColor={colors.Primary}
      animate={flip}
      onTap={() => cycle()}
    />
  )
}`}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="sampleIntegrations__steps__step">
          <div className="sampleIntegrations__steps__step__text">
            <div className="sampleIntegrations__steps__step__text__title">
              Hiding Controls
            </div>
            <div className="sampleIntegrations__steps__step__text__pr">
              <p>
                A control that allows multiple values per ControlType, provided
                as an array via properties. For most control ypes this will be
                displayed as an additional section in the properties panel
                allowing as many fields to be provided as required.
              </p>

              <p className="no-margin">
                For a ControlType.ComponentInstance the Frame will also gain an
                additional outlet control on the Canvas that allows links to be
                created between frames.
              </p>
            </div>
          </div>
          <div className="sampleIntegrations__steps__step__code">
            <SyntaxHighlighter
              lineNumberStyle={{
                // borderRight: "1px solid #363448",
                paddingRight: 20,
                paddingLeft: 35,
                marginRight: 20,
              }}
              showLineNumbers
              language="jsx"
              style={okaidia}
            >
              {`export function MyComponent(props) {
  return <div>{props.text}</div>
}

MyComponent.defaultProps = {
  text: "Hello World!",
  toggle: true,
}

addPropertyControls(MyComponent, {
  toggle: {
    type: ControlType.Boolean,
    title: "Toggle",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  text: {
    type: ControlType.String,
    title: "Text",
    hidden(props) {
      return props.toggle === false
    },
  },
})`}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="sampleIntegrations__steps__step no-border">
          <div className="sampleIntegrations__steps__step__text">
            <div className="sampleIntegrations__steps__step__text__title">
              ControlType.Transition
            </div>
            <div className="sampleIntegrations__steps__step__text__pr">
              <p className="no-margin">
                A control that exposes events in the prototyping panel within
                the Framer UI. When choosing an event from the prototyping
                panel, you’ll have the option to navigate to a new Frame or open
                a URL.
              </p>
            </div>
          </div>
          <div className="sampleIntegrations__steps__step__code">
            <SyntaxHighlighter
              lineNumberStyle={{
                // borderRight: "1px solid #363448",
                paddingRight: 20,
                paddingLeft: 35,
                marginRight: 20,
              }}
              showLineNumbers
              language="jsx"
              style={okaidia}
            >
              {`export function MyComponent(props) {
  return (
    <Frame
      animate={{ scale: 2 }}
      transition={props.transition}
    />
  )
}

addPropertyControls(MyComponent, {
  transition: {
    type: ControlType.Transition,
    title: "Transition",
  },
})`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleIntegrations;
