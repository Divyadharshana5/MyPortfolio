import React, { useState, useEffect } from "react";

export default function GithubContributionCount({ username }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((res) => res.json())
      .then((data) => setCount(data.totalContributions || 0));
  }, [username]);

  return <span>{count}+</span>;
}
