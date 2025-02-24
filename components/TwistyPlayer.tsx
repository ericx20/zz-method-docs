// taken from
// https://github.com/cubing/react-cubing/blob/main/src/TwistyPlayer/index.tsx
import {
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { TwistyPlayer as TP, TwistyPlayerConfig } from "cubing/twisty";
import { Alg } from "cubing/alg";
import { cube3x3x3 } from "cubing/puzzles";

export interface TwistyPlayerExtendedConfig extends TwistyPlayerConfig {
  className?: string;
  rootClassName?: string;
  onTwistyInit?: (twisty: TP) => void;
  stickeringSetup?: Alg | string;
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
      stickeringSetup,
      ...props
    }: TwistyPlayerExtendedConfig,
    ref
  ) => {
    const twistyPlayer = useRef<TP | null>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      const newTwisty = new TP(props);
      if (className) {
        newTwisty.className = className;
      }

      if (stickeringSetup) {
        transformTPMask(newTwisty, stickeringSetup)
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

// adapted from https://github.com/cubing/cubing.js/issues/224#issuecomment-1275928713
async function transformTPMask(twisty: TP, transformationSource: Alg | string) {
  const kpuzzle = await cube3x3x3.kpuzzle();
  const mask = await twisty.experimentalModel.twistySceneModel.stickeringMask.get()
  const transformation = kpuzzle.algToTransformation(transformationSource)
  const newMask = { orbits: {} };

  for (
    let orbitIndex = 0;
    orbitIndex < kpuzzle.definition.orbits.length;
    orbitIndex++
  ) {
    const newOrbitMask = { pieces: [] as any[] };
    const { numPieces, numOrientations, orbitName } =
      kpuzzle.definition.orbits[orbitIndex];

    const orbitMask = mask.orbits[orbitName];
    for (let i = 0; i < numPieces; i++) {
      const perm = transformation.transformationData[orbitName].permutation[i];
      const ori =
        transformation.transformationData[orbitName].orientationDelta[i];
      let facelets = orbitMask.pieces[perm]!.facelets.slice(0, numOrientations);
      facelets = facelets.slice(ori).concat(facelets.slice(0, ori));
      newOrbitMask.pieces.push({ facelets });
    }
    newMask.orbits[orbitName] = newOrbitMask;
  }

  twisty.experimentalStickeringMaskOrbits = newMask;
}