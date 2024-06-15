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
            <td>{renderButton(EFaceRotation.FrontClockwise)}</td>
            <td>{renderButton(EFaceRotation.RightClockwise)}</td>
            <td>{renderButton(EFaceRotation.UpClockwise)}</td>
            <td>{renderButton(EFaceRotation.BackClockwise)}</td>
            <td>{renderButton(EFaceRotation.LeftClockwise)}</td>
            <td>{renderButton(EFaceRotation.DownClockwise)}</td>
          </tr>
          <tr>
            <td>{renderButton(EFaceRotation.FrontInverted)}</td>
            <td>{renderButton(EFaceRotation.RightInverted)}</td>
            <td>{renderButton(EFaceRotation.UpInverted)}</td>
            <td>{renderButton(EFaceRotation.BackInverted)}</td>
            <td>{renderButton(EFaceRotation.LeftInverted)}</td>
            <td>{renderButton(EFaceRotation.DownInverted)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

};