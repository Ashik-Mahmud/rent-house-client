import { useEffect, useState } from "react";
import { useAppSelector } from "../app/store";

const useTitle = (props: string) => {
  const { name } = useAppSelector((state) => state.appOption);

  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = title + " | " + name;
    setTitle(props);
  }, [title, props, name]);

  return [setTitle];
};

export default useTitle;
