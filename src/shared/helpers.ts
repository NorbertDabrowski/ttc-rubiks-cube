import { EFaceRotation } from "./constants";

export const rotationDescription = (rotation: EFaceRotation): string => {
  switch (rotation) {
    case EFaceRotation.FrontClockwise: return "F";
    case EFaceRotation.RightClockwise: return "R";
    case EFaceRotation.UpClockwise: return "U";
    case EFaceRotation.BackClockwise: return "B";
    case EFaceRotation.LeftClockwise: return "L";
    case EFaceRotation.DownClockwise: return "D";
    case EFaceRotation.FrontInverted: return "F'";
    case EFaceRotation.RightInverted: return "R'";
    case EFaceRotation.UpInverted: return "U'";
    case EFaceRotation.BackInverted: return "B'";
    case EFaceRotation.LeftInverted: return "L'";
    case EFaceRotation.DownInverted: return "D'";
  }
}