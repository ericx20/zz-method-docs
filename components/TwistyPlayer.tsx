// taken from
// https://github.com/cubing/react-cubing/blob/main/src/TwistyPlayer/index.tsx
import {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { TwistyPlayer as TP, TwistyPlayerConfig } from "cubing/twisty";

export interface TwistyPlayerExtendedConfig extends TwistyPlayerConfig {
  className?: string;
  onTwistyInit?: (twisty: TP) => void;
}

const TwistyPlayer = forwardRef(
  ({ className, onTwistyInit, ...props }: TwistyPlayerExtendedConfig, ref) => {
    const [twistyPlayer, setTwisty] = useState<TP>();
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      const newTwisty = new TP(props);
      if (className) {
        newTwisty.className = className;
      }

      newTwisty.style.maxWidth = "100%";
      setTwisty(newTwisty);
      spanRef.current?.appendChild(newTwisty);
      if (onTwistyInit) onTwistyInit(newTwisty);
      return () => {
        spanRef.current?.removeChild(newTwisty);
      };
    }, [props.alg]);

    useImperativeHandle(ref, () => {
      return twistyPlayer;
    });

    return <span id="twisty-header" className={className} ref={spanRef} />;
  }
);

export default TwistyPlayer;
