// hooks
import { useState } from "react";

// components
import { MsgBox } from "../MsgBox";
import { HiClipboardCopy } from "react-icons/hi";

// styles
import { brPreviewer__output } from "./style.module.css";

export const OutputCSS = ({ borders }) => {
  const [showMsgBox, setShowMsgBox] = useState(false);

  const getBorderRadius = (borderList) => {
    const {
      topLeft = 0,
      topRight = 0,
      bottomRight = 0,
      bottomLeft = 0,
    } = borderList;

    return `${topLeft !== 0 ? topLeft + "px" : topLeft} ${topRight !== 0 ? topRight + "px" : topRight} ${bottomRight !== 0 ? bottomRight + "px" : bottomRight} ${bottomLeft !== 0 ? bottomLeft + "px" : bottomLeft};`;
  };

  const displayMsgBox = () => {
    setShowMsgBox((prev) => !prev);
    setTimeout(() => {
      setShowMsgBox((prev) => !prev);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`border-radius: ${getBorderRadius(borders)}`);
  };

  const handleClick = () => {
    copyToClipboard();
    displayMsgBox();
  };

  return (
    <div
      className={brPreviewer__output}
      onClick={handleClick}
      disabled={showMsgBox}
    >
      <MsgBox show={showMsgBox} />
      <span>{`border-radius: ${getBorderRadius(borders)}`}</span>
      <HiClipboardCopy size={24} />
    </div>
  );
};
