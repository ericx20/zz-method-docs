"use client";

import { AlgCase, AlgSet } from "algs/types";
import TwistyPlayer from "components/TwistyPlayer";
import React from "react";
import styles from "./AlgSheet.module.css";

export interface AlgSheetProps {
  algSet: AlgSet;
}

export default function AlgSheet({ algSet }: AlgSheetProps) {
  const row = (algCase: AlgCase) => (
    <tr key={algCase.name}>
      <td className={styles.name}>{algCase.name}</td>
      <td className={styles.case}>
        <div className={styles.caseContainer}>
          <strong className={styles.mobileName}>{algCase.name}</strong>
          <TwistyPlayer
            alg={algCase.algs[0]}
            stickeringSetup="x2"
            experimentalSetupAlg="x2"
            experimentalSetupAnchor="end"
            visualization={
              algSet.visualization === "3D" ? "3D" : "experimental-2D-LL"
            }
            experimentalStickering={algSet.stickering}
            experimentalStickeringMaskOrbits={algSet.customStickering}
            controlPanel="none"
            background="none"
            className={styles.algImage}
            rootClassName={styles.algImage}
          />
          <p className={styles.mobileCategory}>{algCase.category}</p>
        </div>
      </td>
      <td>
        <div className={styles.algListContainer}>
          {algCase.algs.length === 1 ? (
            <p>{algCase.algs[0]}</p>
          ) : (
            <ul className={styles.algList}>
              {algCase.algs.map((alg) => (
                <li key={alg}>{alg}</li>
              ))}
            </ul>
          )}
        </div>
      </td>
      {algSet.hasCategories && (
        <td className={styles.category}>{algCase.category}</td>
      )}
    </tr>
  );
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.nameHeader}>Name</th>
            <th className={styles.caseHeader}>Case</th>
            <th>Algs</th>
            {algSet.hasCategories && (
              <th className={styles.categoryHeader}>Category</th>
            )}
          </tr>
        </thead>
        <tbody>{algSet.algCases.map(row)}</tbody>
      </table>
    </div>
  );
}
