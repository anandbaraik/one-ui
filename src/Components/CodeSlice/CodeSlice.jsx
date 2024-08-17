import React from 'react'
import { CopyBlock, anOldHope } from "react-code-blocks";
const CodeSlice = ({ code, language="jsx", highlight="" }) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      theme={anOldHope}
      wrapLines
      highlight={highlight}
    />
  )
}

export default CodeSlice