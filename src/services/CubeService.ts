import { EColor, EFaceRotation, ECubeRotation } from "../shared/constants";

export interface CubeModel {
  faceFront: EColor[];
  faceRight: EColor[];
  faceUp: EColor[];
  faceBack: EColor[];
  faceLeft: EColor[];
  faceDown: EColor[];
}

export const createSolvedCube = (): CubeModel => {
  return {
    faceFront: fillFaceWithColor(EColor.Green),
    faceRight: fillFaceWithColor(EColor.Red),
    faceUp: fillFaceWithColor(EColor.White),
    faceBack: fillFaceWithColor(EColor.Blue),
    faceLeft: fillFaceWithColor(EColor.Orange),
    faceDown: fillFaceWithColor(EColor.Yellow)
  };
}

const fillFaceWithColor = (color: EColor): EColor[] => {
  return Array(9).fill(color);
}


export const rotateFace = (cube: CubeModel, rotation: EFaceRotation): CubeModel => {
  switch (rotation) {
    case EFaceRotation.FrontClockwise: cube = rotateFaceFront(cube, true); break;
    case EFaceRotation.RightClockwise: cube = rotateFaceRight(cube, true); break;
    case EFaceRotation.UpClockwise: cube = rotateFaceUp(cube, true); break;
    case EFaceRotation.BackClockwise: cube = rotateFaceBack(cube, true); break;
    case EFaceRotation.LeftClockwise: cube = rotateFaceLeft(cube, true); break;
    case EFaceRotation.DownClockwise: cube = rotateFaceDown(cube, true); break;
    
    case EFaceRotation.FrontInverted: cube = rotateFaceFront(cube, false); break;
    case EFaceRotation.RightInverted: cube = rotateFaceRight(cube, false); break;
    case EFaceRotation.UpInverted: cube = rotateFaceUp(cube, false); break;
    case EFaceRotation.BackInverted: cube = rotateFaceBack(cube, false); break;
    case EFaceRotation.LeftInverted: cube = rotateFaceLeft(cube, false); break;
    case EFaceRotation.DownInverted: cube = rotateFaceDown(cube, false); break;
  }
  return cube;
}

const rotateFaceFront = (cube: CubeModel, clockwise: boolean): CubeModel => {
  return rotateFullFace(cube, clockwise);
}

const rotateFaceRight = (cube: CubeModel, clockwise: boolean): CubeModel => {
  cube = rotateCube(cube, ECubeRotation.Left);
  let cubeNew = rotateFullFace(cube, clockwise);
  return rotateCube(cubeNew, ECubeRotation.Right);
}

const rotateFaceUp = (cube: CubeModel, clockwise: boolean): CubeModel => {
  cube = rotateCube(cube, ECubeRotation.Down);
  let cubeNew = rotateFullFace(cube, clockwise);
  return rotateCube(cubeNew, ECubeRotation.Up);
}

const rotateFaceBack = (cube: CubeModel, clockwise: boolean): CubeModel => {
  cube = rotateCube(cube, ECubeRotation.Left);
  cube = rotateCube(cube, ECubeRotation.Left);

  let cubeNew = rotateFullFace(cube, clockwise);

  cubeNew = rotateCube(cubeNew, ECubeRotation.Right);
  return rotateCube(cubeNew, ECubeRotation.Right);
}

const rotateFaceLeft = (cube: CubeModel, clockwise: boolean): CubeModel => {
  cube = rotateCube(cube, ECubeRotation.Right);
  let cubeNew = rotateFullFace(cube, clockwise);
  return rotateCube(cubeNew, ECubeRotation.Left);
}

const rotateFaceDown = (cube: CubeModel, clockwise: boolean): CubeModel => {
  cube = rotateCube(cube, ECubeRotation.Up);
  let cubeNew = rotateFullFace(cube, clockwise);
  return rotateCube(cubeNew, ECubeRotation.Down);
}


//          Up
//          [0,1,2]
//          [3,4,5]
//          [6,7,8]
//
// Left     Front    Right    Back
// [0,1,2]  [0,1,2]  [0,1,2]  [0,1,2]
// [3,4,5]  [3,4,5]  [3,4,5]  [3,4,5]
// [6,7,8]  [6,7,8]  [6,7,8]  [6,7,8]
//
//          Down
//          [0,1,2]
//          [3,4,5]
//          [6,7,8]

// rotates cube to help align with face rotation
const rotateCube = (cube: CubeModel, cubeRotation: ECubeRotation): CubeModel => {
  let cubeNew = cloneCube(cube);

  switch (cubeRotation) {
    case ECubeRotation.Left:
      cubeNew.faceFront = cube.faceRight;
      cubeNew.faceRight = cube.faceBack;
      cubeNew.faceBack = cube.faceLeft;
      cubeNew.faceLeft = cube.faceFront;
      cubeNew.faceUp = rotatePlainFace(cube.faceUp, true);
      cubeNew.faceDown = rotatePlainFace(cube.faceDown, false);
      break;

    case ECubeRotation.Right:
      cubeNew.faceFront = cube.faceLeft;
      cubeNew.faceRight = cube.faceFront;
      cubeNew.faceBack = cube.faceRight;
      cubeNew.faceLeft = cube.faceBack;
      cubeNew.faceUp = rotatePlainFace(cube.faceUp, false);
      cubeNew.faceDown = rotatePlainFace(cube.faceDown, true);
      break;

    case ECubeRotation.Down:
      cubeNew.faceFront = cube.faceUp;
      cubeNew.faceDown = cube.faceFront;

      cubeNew.faceUp = rotatePlainFace(cube.faceBack, true);
      cubeNew.faceUp = rotatePlainFace(cubeNew.faceUp, true);

      cubeNew.faceBack = rotatePlainFace(cube.faceDown, true);
      cubeNew.faceBack = rotatePlainFace(cubeNew.faceBack, true);

      cubeNew.faceLeft = rotatePlainFace(cube.faceLeft, true);
      cubeNew.faceRight = rotatePlainFace(cube.faceRight, false);
      break;

    case ECubeRotation.Up:
      cubeNew.faceFront = cube.faceDown;
      cubeNew.faceUp = cube.faceFront;

      cubeNew.faceDown = rotatePlainFace(cube.faceBack, true);
      cubeNew.faceDown = rotatePlainFace(cubeNew.faceDown, true);

      cubeNew.faceBack = rotatePlainFace(cube.faceUp, true);
      cubeNew.faceBack = rotatePlainFace(cubeNew.faceBack, true);

      cubeNew.faceLeft = rotatePlainFace(cube.faceLeft, false);
      cubeNew.faceRight = rotatePlainFace(cube.faceRight, true);
      break;
  }

  return cubeNew;
}

// rotates face that is currently set as the Front face
const rotateFullFace = (cube: CubeModel, clockwise: boolean) => {
  let cubeAfter = cloneCube(cube);

  cubeAfter.faceFront = rotatePlainFace(cube.faceFront, clockwise);

  if (clockwise) {
    cubeAfter.faceRight[0] = cube.faceUp[6];
    cubeAfter.faceRight[3] = cube.faceUp[7];
    cubeAfter.faceRight[6] = cube.faceUp[8];

    cubeAfter.faceDown[0] = cube.faceRight[6];
    cubeAfter.faceDown[1] = cube.faceRight[3];
    cubeAfter.faceDown[2] = cube.faceRight[0];

    cubeAfter.faceLeft[2] = cube.faceDown[0];
    cubeAfter.faceLeft[5] = cube.faceDown[1];
    cubeAfter.faceLeft[8] = cube.faceDown[2];

    cubeAfter.faceUp[6] = cube.faceLeft[8];
    cubeAfter.faceUp[7] = cube.faceLeft[5];
    cubeAfter.faceUp[8] = cube.faceLeft[2];
  }
  else {
    cubeAfter.faceRight[0] = cube.faceDown[2];
    cubeAfter.faceRight[3] = cube.faceDown[1];
    cubeAfter.faceRight[6] = cube.faceDown[0];

    cubeAfter.faceDown[0] = cube.faceLeft[2];
    cubeAfter.faceDown[1] = cube.faceLeft[5];
    cubeAfter.faceDown[2] = cube.faceLeft[8];

    cubeAfter.faceLeft[2] = cube.faceUp[8];
    cubeAfter.faceLeft[5] = cube.faceUp[7];
    cubeAfter.faceLeft[8] = cube.faceUp[6];

    cubeAfter.faceUp[6] = cube.faceRight[0];
    cubeAfter.faceUp[7] = cube.faceRight[3];
    cubeAfter.faceUp[8] = cube.faceRight[6];
  }

  return cubeAfter;
}


const cloneCube = (cube: CubeModel): CubeModel => {
  return {
    faceFront: [...cube.faceFront],
    faceRight: [...cube.faceRight],
    faceUp: [...cube.faceUp],
    faceBack: [...cube.faceBack],
    faceLeft: [...cube.faceLeft],
    faceDown: [...cube.faceDown],
  };
}

const faceRotationIndexes = [6, 3, 0, 7, 4, 1, 8, 5, 2];

// rotates selected face without changing the side faces
const rotatePlainFace = (face: EColor[], clockwise: boolean) => {
  const faceAfter = [...face];
  if (clockwise) {
    for (let i = 0; i <= 8; i++) faceAfter[i] = face[faceRotationIndexes[i]];
  }
  else {
    for (let i = 0; i <= 8; i++) faceAfter[i] = face[faceRotationIndexes[8 - i]];

  }
  return faceAfter;
}



