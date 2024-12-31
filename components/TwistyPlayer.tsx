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
  rotateStickering?: Alg | string;
}

  /**
   * A React wrapper for the cubing.js `<twisty-player>` element.
   * See all supported props: https://experiments.cubing.net/cubing.js/twisty/twisty-player-props/
   * Please note: in React, these props are written in "camel case", for example controlPanel instead of control-panel.
   * There are three additional props added for convenience:
   * 1. `className`: CSS class to customize the Twisty Player itself
   * 2. `rootClassName`: CSS class to customize the `<span>` element that wraps the Twisty Player
   * 3. `rotateStickering`: a cube rotation that translates the stickering
   *
   * See the end of the file for documentation about the `experimentalStickeringMaskOrbits` prop.
   *
   * @example
   * import TwistyPlayer from "@site/src/components/TwistyPlayer";
   * // Roux FB+SS with custom stickering.
   * // The blocks have orange on bottom due to rotateStickering="z".
   * <TwistyPlayer
   *   experimentalStickeringMaskOrbits="EDGES:IIIII-I-I---,CORNERS:IIIII---,CENTERS:I-I-II"
   *   rotateStickering="z"
   *   alg="R"
   * />
   * // 5x5 with example cross scramble + solution.
   * // Uses a preset stickering from cubing.js.
   * <TwistyPlayer
   *   puzzle="5x5x5"
   *   experimentalSetupAlg="R D' L R2 B U' R' D R D F'"
   *   alg="y' R2 F R' L' D L'"
   * />
   */
const TwistyPlayer = forwardRef(
  (
    {
      className,
      rootClassName,
      onTwistyInit,
      rotateStickering,
      ...props
    }: TwistyPlayerExtendedConfig,
    ref
  ) => {
    const twistyPlayer = useRef<TP | null>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      // If `rotateStickering` is defined, prefix the alg setup with the inverse of `rotateStickering`.
      const setupAlgOverride = rotateStickering
      ? new Alg(rotateStickering)
          .invert()
          .concat(props.experimentalSetupAlg ?? [])
      : undefined;
      const newTwisty = new TP({
        background: "none", // override default style
        ...props,
        ...(setupAlgOverride && { experimentalSetupAlg: setupAlgOverride }),
      });
      if (className) {
        newTwisty.className = className;
      }

      if (rotateStickering) {
        transformTPMask(newTwisty, rotateStickering)
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
  This prop is used to create custom stickerings for puzzles, letting you show/dim/hide specific pieces.
  It's an experimental feature that is subject to change.
  
  # ---------- 3x3 ----------

  Set `experimentalStickeringMaskorbits` to a string in the format "EDGES:xxxxxxxxxxxx,CORNERS:xxxxxxxx,CENTERS:xxxxxx"
  where each "x" is one of the following characters:
  (table taken from https://github.com/cubing/cubing.js/commit/668179c8bb116b24775e5450a5d949c38068d3a0)
  | Character | Primary  | Other  | Meaning                                              |
  |-----------|----------|--------|------------------------------------------------------|
  | `-`       | bright   | bright | piece to solve                                       |
  | `D`       | dim      | dim    | dim                                                  |
  | `I`       | gray     | gray   | ignored                                              |
  | `P`       | bright   | gray   | to permute (e.g. PLL)                                |
  | `O`       | dim      | bright | to orient (e.g. OLL)                                 |
  | `o`       | dim      | gray   | oriented, primary sticker known (e.g. OLL completed) |
  | `?`       | oriented | gray   | oriented, primary sticker unknown (e.g. EO)          |
  | `X`       | N/A      | N/A    | invisible                                            |
  
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

  For example,
  <TwistyPlayer
    puzzle="3x3x3"
    experimentalStickeringMaskOrbits="EDGES:-I----------,CORNERS:--------,CENTERS:------"
  />
  will have the UR edge invisible.

  # ---------- Other puzzles ----------
  Very similar, except we generalize the format "EDGES:xxxxxxxxxxxx,CORNERS:xxxxxxxx,CENTERS:xxxxxx"
  Replace EDGES, CORNERS, and CENTERS with the names of the piece orbits as defined in cubing.js.
  - pyra: EDGES, CORNERS, CORNERS2
  - 5x5: EDGES, EDGES2, CORNERS, CENTERS, CENTERS2, CENTERS3
  To find the names of these orbits for any puzzle, go to https://experiments.cubing.net/cubing.js/twisty/twisty-player-props/
  Look at the kpuzzle box, and try to copy the entire contents of that box. orbitNames is what you need.

  Then, each orbit name is followed with characters from the table above, to sticker the pieces of that orbit.
  Please ensure the number of characters matches the number of pieces in that orbit, otherwise you may get errors.
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
