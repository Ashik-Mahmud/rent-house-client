import { useEffect, useState } from "react";

const useTitle = (props: string) => {
  console.log(props);
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = title;
    setTitle(props);
  }, [title, props]);

  return [setTitle];
};

export default useTitle;
