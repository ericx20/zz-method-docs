import { useState, useRef, useEffect } from "react";
import TwistyPlayer, { TwistyPlayerExtendedConfig } from "./TwistyPlayer";
import { TwistyPlayer as TP } from "cubing/twisty";
import styles from "./TwistyPlayerDoubleSprite.module.css";

import { FaPlay } from "react-icons/fa";

export interface TwistyPlayerDoubleSpriteProps
  extends Omit<TwistyPlayerExtendedConfig, keyof typeof overrides> {
  firstSprite: string;
  secondSprite: string;
  showHintSprite?: boolean;
  moveIndexToChangeSprite: number;
}

const overrides = {
  experimentalDragInput: "none",
  controlPanel: "none",
  background: "none",
  experimentalStickering: "picture",
} satisfies Partial<TwistyPlayerExtendedConfig>;

/**
 * This component is a hack to fade between two different sprites on a cube.
 * Unfortunately we cannot dynamically change the sprite of a TwistyPlayer cube,
 * so the current solution is to stack two cubes with different sprite
 * and fade from one to the other by changing the opacity.
 */
export default function TwistyPlayerDoubleSprite({
  firstSprite,
  secondSprite,
  moveIndexToChangeSprite,
  showHintSprite,
  ...props
}: TwistyPlayerDoubleSpriteProps) {
  const firstTwistyPlayer = useRef<TP>(null);
  const secondTwistyPlayer = useRef<TP>(null);

  const [firstOpacity, setFirstOpacity] = useState(0);
  const [secondOpacity, setSecondOpacity] = useState(0);

  const [isPlaying, setPlaying] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const commonProps: TwistyPlayerExtendedConfig = {
    ...props,
    ...overrides,
  };

  useEffect(() => {
    if (firstTwistyPlayer.current && secondTwistyPlayer.current) {
      // both TwistyPlayers have loaded now
      secondTwistyPlayer.current.experimentalModel.coarseTimelineInfo.addFreshListener(
        ({ playing, atEnd }) => {
          setPlaying(playing);
          setIsEnd(atEnd);
        }
      );
      secondTwistyPlayer.current.experimentalModel.currentMoveInfo.addFreshListener(
        (moveInfo) => {
          let secondOpacity = 0;
          if (moveInfo.patternIndex === moveIndexToChangeSprite) {
            const fraction = moveInfo.currentMoves.at(0)?.fraction;
            if (fraction) secondOpacity = easeIn(fraction);
          } else if (moveInfo.patternIndex > moveIndexToChangeSprite) {
            secondOpacity = 1;
          }
          setFirstOpacity(1 - secondOpacity);
          setSecondOpacity(secondOpacity);
        }
      );
    }
  }, [firstTwistyPlayer.current, secondTwistyPlayer.current]);

  const handleClick = () => {
    firstTwistyPlayer.current?.play();

    secondTwistyPlayer.current?.play();
  };

  return (
    <div className={styles.container} role="button" onClick={handleClick}>
      <div
        className={styles.bottom}
        style={{ opacity: isEnd ? 0 : firstOpacity }}
      >
        <TwistyPlayer
          ref={firstTwistyPlayer}
          experimentalSprite={firstSprite}
          experimentalHintSprite={showHintSprite ? firstSprite : ""}
          {...commonProps}
        />
      </div>
      <div
        className={styles.top}
        style={{ opacity: isEnd ? 1 : secondOpacity }}
      >
        <TwistyPlayer
          ref={secondTwistyPlayer}
          experimentalSprite={secondSprite}
          experimentalHintSprite={showHintSprite ? secondSprite : ""}
          {...commonProps}
        />
      </div>
      <div
        className={styles.playButtonWrapper}
        style={{ opacity: isPlaying ? 0 : undefined }}
      >
        <FaPlay className={styles.playButton} />
      </div>
    </div>
  );
}

function easeIn(n: number) {
  return n * n * n;
}
