import React from "react";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import androidStudio from "../../Assets/TechIcons/android-studio.png";
import postman from "../../Assets/TechIcons/Postman.svg";
import figma from "../../Assets/TechIcons/figma.png";

const toolList = [
  { icon: vsCode, name: "VS Code" },
  { icon: androidStudio, name: "Android Studio" },
  { icon: intelliJ, name: "IntelliJ IDEA" },
  { icon: postman, name: "Postman" },
  { icon: figma, name: "Figma" },
  { icon: macOs, name: "macOS" },
];

function ToolItem({ tool, duplicate = false }) {
  return (
    <div
      className="tech-icons tech-marquee-item"
      aria-hidden={duplicate || undefined}
    >
      <img src={tool.icon} alt="" className="tech-icon-images" loading="lazy" />
      <div className="tech-icons-text">{tool.name}</div>
    </div>
  );
}

function Toolstack() {
  return (
    <div className="tech-marquee-wrapper overflow-hidden">
      <div className="tech-marquee-track" style={{ animationDuration: "25s" }}>
        {toolList.map((tool) => (
          <ToolItem tool={tool} key={tool.name} />
        ))}
        {toolList.map((tool) => (
          <ToolItem tool={tool} key={`duplicate-${tool.name}`} duplicate />
        ))}
      </div>
    </div>
  );
}

export default Toolstack;
