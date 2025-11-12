import { useEffect } from "react";

const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = `Fix-It-Up | ${title}`;
  }, [title]);
};

export default useDynamicTitle;
