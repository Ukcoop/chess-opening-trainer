'use client';

import { ChessGame } from "@react-chess-tools/react-chess-game";
import styles from "./page.module.css";

export default function Home() {
  return (<>
    <div style={{"display": "flex","width": "90vh", "height": "100vh","alignItems": "center", "paddingLeft": "3vw"}}>
     <ChessGame.Root>
       <ChessGame.Board/>
     </ChessGame.Root>
     </div>
    </>
  );
}
