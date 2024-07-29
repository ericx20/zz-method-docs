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
  rootClassName?: string;
  onTwistyInit?: (twisty: TP) => void;
}

/**
 * A React wrapper for the cubing.js `<twisty-player>` element.
 */
const TwistyPlayer = forwardRef(
  (
    {
      className,
      rootClassName,
      onTwistyInit,
      ...props
    }: TwistyPlayerExtendedConfig,
    ref
  ) => {
    const twistyPlayer = useRef<TP>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      const newTwisty = new TP(props);
      if (className) {
        newTwisty.className = className;
      }

      newTwisty.style.maxWidth = "100%";
      twistyPlayer.current = newTwisty;
      spanRef.current?.appendChild(newTwisty);
      if (onTwistyInit) onTwistyInit(newTwisty);
      return () => {
        spanRef.current?.removeChild(newTwisty);
      };
    }, []);

    useEffect(() => {
      if (!twistyPlayer.current || !props.alg) return;
      twistyPlayer.current.alg = props.alg;
    }, [props.alg])

    useImperativeHandle(ref, () => {
      return twistyPlayer;
    });

    return <span className={rootClassName} ref={spanRef} />;
  }
);

export default TwistyPlayer;

/* Documentation for the experimentalStickeringMaskOrbits prop/attribute:
This prop is used to customize the way pieces are highlighted on the cube,
if it's beyond the default supported stickerings such as OCLL or EOCross.
It's an experimental feature that is subject to change.

Pass in a string in the format "EDGES:xxxxxxxxxxxx,CORNERS:xxxxxxxx,CENTERS:xxxxxx"
where each "x" is one of the following characters:
"-": regular
"D": dim
"I": ignored
"X": invisible
"O": ignore non-primary (ignore the non-primary stickers)
"P": permute non-primary (dim the primary stickers, useful for PLL and other stickerings where just the permutation of pieces matters)
"o": ignoriented (same as O, except the primary sticker is also dimmed)
"?": orientation without permutation (useful for EO and CO on the entire cube! Primary stickers are replaced with turquoise)
This is defined in https://github.com/cubing/cubing.js/blob/36c57c2dadc889b1321d05d8cfc005cef8a9bffd/src/cubing/twisty/model/props/puzzle/display/parseSerializedStickeringMask.ts

"Primary stickers" are stickers that belong on the U and D faces, and FL, FR, BL, BR positions.
They're relevant for edge orientation and corner orientation.

Here is the order of the pieces for 3x3:
EDGES:
  UF, UR, UB, UL,
  DF, DR, DB, DL,
  FR, FL, BR, BL

CORNERS:
  UFR, UBR, UBL, UFL,
  DFR, DFL, DBL, DBR

CENTERS: U, L, F, R, B, D
*/
