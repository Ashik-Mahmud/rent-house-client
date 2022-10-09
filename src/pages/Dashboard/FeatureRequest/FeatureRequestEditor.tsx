import { useEffect } from "react";
import { useQuill } from "react-quilljs";
type Props = {
  setRequestText: (state: string) => void;
};

const FeatureRequestEditor = ({ setRequestText }: Props) => {
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: "1" }, { header: "2" }, { header: "3" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  const placeholder = "Write Feature Request Or Bugs Issues ...";

  const formats = [
    "size",
    "header",
    "bold",
    "italic",
    "underline",
    "strike ",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "clean",
  ];
  const { quill, quillRef } = useQuill({ modules, formats, placeholder });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setRequestText(quillRef?.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef, setRequestText]);

  return (
    <div style={{ width: "100%", height: 250 }}>
      <div ref={quillRef} />
    </div>
  );
};

export default FeatureRequestEditor;
