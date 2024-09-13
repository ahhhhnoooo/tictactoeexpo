
import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { TicTacToeGameState } from "./classes/TicTacToeGameState";
import TicTacToeGame from "./utils/TicTacToeGame";

const X_IMAGE_SOURCE = require('@/assets/img/x.svg')
const O_IMAGE_SOURCE = require('@/assets/img/o.svg')
const BLANK_IMAGE_SOURCE = require('@/assets/img/blank.svg')
export default function TicTacToeGameBoard() {
  const [ gameState, setgameState ] = useState(new TicTacToeGameState());

  //When a space is clicked, calculate new state and set it
  const onClickBoardSpace = (index: number) => {
    let newState = TicTacToeGame.onClick(gameState, index);
    setgameState(newState);
  }

  //Generate an array of Pressable Images
  let boardSpaces = [];
  for (let index = 0; index < gameState.board.length; ++index) {
    let imgSource: any = BLANK_IMAGE_SOURCE;
    if (gameState.board[index] === 'x') imgSource =  X_IMAGE_SOURCE;
    else if (gameState.board[index] === 'o') imgSource = O_IMAGE_SOURCE;
    boardSpaces.push((
      <Pressable onPress={() => onClickBoardSpace(index)} key={index}
      style={{
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Image source={imgSource}></Image>
      </Pressable>
    ))
  }

  return (
    <View style={{
      flexDirection: "row",
      flexWrap: "wrap",
      maxWidth: 640
    }}>
      {boardSpaces}
    </View>
  );
}
