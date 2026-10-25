import { createRoot } from "react-dom/client";
import SplitText from "./SplitText";

createRoot(document.getElementById("root")).render(
  <SplitText
    text="Ta-na-na-naaaamm"
    className="titulo"
    delay={80}
    duration={1}
    ease="back.out(1.7)"
    splitType="chars"
    from={{ opacity: 0, y: 60, rotate: -20 }}
    to={{ opacity: 1, y: 0, rotate: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    textAlign="left"
    tag="h1"
  />,
);
