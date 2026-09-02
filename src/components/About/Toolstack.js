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
    <div className="tech-marquee-wrapper overflow-hidden">
      <div className="tech-marquee-track" style={{ animationDuration: "25s" }}>
        {/* Loop ចំនួន ២ ជុំសម្រាប់ Smooth Infinite Marquee */}
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