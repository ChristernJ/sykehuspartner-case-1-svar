import {
  Coachmark,
  DirectionalHint,
  IconButton,
  TeachingBubbleContent,
  TooltipHost,
} from "@fluentui/react";
import * as React from "react";
import { ComponentB } from "../Components/ComponentB";
import { ComponentC } from "../Components/ComponentC";


export function MainComponent(): React.ReactElement {
  const [showCoachmark, setShowCoachmark] = React.useState(false);
  const targetButton = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    setTimeout(() => {
      setShowCoachmark(true);
    }, 1000);
  }, []);
  return (
    <div className="MainComponent">
      <h1>Komponent A (hovedkomponent)</h1>
      <ComponentB />
      <ComponentC />
      <textarea 
        className="TextAreaA"
        id="TextAreaA" 
        name="mainTextComponent" 
        readOnly
          />
    </div>
  );
}
