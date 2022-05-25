
//useMemoBasic
import React, { useMemo } from "react";
import { useState } from "react";

const MemoBasic = () => {

  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  const words = ["Thanh", "Tan", "Do", "ab", "cd"];
  const word = words[wordIdx];

  const ComputeLetter = word => {
    let i = 0;
    while(i<100000000) i++;
    return word.length;
  }
  const NextWord = () => {
    const next = (wordIdx + 1) === words.length ? 0 : wordIdx + 1;
    setWordIdx(next);
  }
  const letterCount = useMemo(()=>ComputeLetter(word),[word])
  return(
    <div style={{padding: "15px"}}>
      <h2>Compute number of letters</h2>
      <p>"{word}" has {letterCount} letters </p>
      <button onClick={NextWord}>Next Word</button>
      <br />
      <br />
      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
export default MemoBasic;
