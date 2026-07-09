import React from "react";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import androidStudio from "../../Assets/TechIcons/android-studio.png";

const toolList = [
  { icon: macOs, name: "Mac Os" },
  { icon: chrome, name: "Google Chrome" },
  { icon: vsCode, name: "Vs Code" },
  { icon: androidStudio, name: "Android Studio" },
  { icon: intelliJ, name: "IntelliJ" },
];

function ToolItem({ tool }) {
  return (
    <div className="tech-icons tech-marquee-item">
      <img src={tool.icon} alt={tool.name} className="tech-icon-images" />
      <div className="tech-icons-text">{tool.name}</div>
    </div>
  );
}

function Toolstack() {
  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee-track" style={{ animationDuration: "22s" }}>
        {toolList.map((tool, idx) => (
          <ToolItem tool={tool} key={`a-${idx}`} />
        ))}
        {toolList.map((tool, idx) => (
          <ToolItem tool={tool} key={`b-${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default Toolstack;