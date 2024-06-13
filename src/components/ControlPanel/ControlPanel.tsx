import { EFaceRotation } from "../../shared/constants";
import { rotationDescription } from "../../shared/helpers";

export interface IProps {
  onRotate: (rotation: EFaceRotation) => void
}

export const ControlPanel = (props: IProps) => {

  const renderButton = (rotation: EFaceRotation) => {
    return <button
      style={{ width: 50, height: 25 }}
      onClick={() => props.onRotate(rotation)}>
      {rotationDescription(rotation)}
    </button>;
  }

  return (
    <div>
      <table className="center">
        <tbody>
          <tr>
            <th>{renderButton(EFaceRotation.FrontClockwise)}</th>
            <th>{renderButton(EFaceRotation.RightClockwise)}</th>
            <th>{renderButton(EFaceRotation.UpClockwise)}</th>
            <th>{renderButton(EFaceRotation.BackClockwise)}</th>
            <th>{renderButton(EFaceRotation.LeftClockwise)}</th>
            <th>{renderButton(EFaceRotation.DownClockwise)}</th>
          </tr>
          <tr>
            <th>{renderButton(EFaceRotation.FrontInverted)}</th>
            <th>{renderButton(EFaceRotation.RightInverted)}</th>
            <th>{renderButton(EFaceRotation.UpInverted)}</th>
            <th>{renderButton(EFaceRotation.BackInverted)}</th>
            <th>{renderButton(EFaceRotation.LeftInverted)}</th>
            <th>{renderButton(EFaceRotation.DownInverted)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )

};