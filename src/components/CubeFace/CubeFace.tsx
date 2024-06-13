import { EColor } from '../../shared/constants';

export interface IProps {
  cublets: EColor[]
}

export const CubeFace = (props: IProps) => {

  // Cublets indexes
  // [0,1,2]
  // [3,4,5]
  // [6,7,8]
  const renderCublet = (faceIndex: number) => {
    let colorText = "silver";
    if (faceIndex >= 0 && faceIndex <= 8) {
      switch (props.cublets[faceIndex]) {
        case EColor.Green: colorText = "green"; break;
        case EColor.Blue: colorText = "blue"; break;
        case EColor.Orange: colorText = "orange"; break;
        case EColor.Red: colorText = "red"; break;
        case EColor.White: colorText = "white"; break;
        case EColor.Yellow: colorText = "yellow"; break;
      }
    }

    return <div style={{
      display: "inline-block",
      border: "1px solid black",
      width: 50,
      height: 50,
      backgroundColor: colorText,
    }} />
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>{renderCublet(0)}</th>
            <th>{renderCublet(1)}</th>
            <th>{renderCublet(2)}</th>
          </tr>
          <tr>
            <th>{renderCublet(3)}</th>
            <th>{renderCublet(4)}</th>
            <th>{renderCublet(5)}</th>
          </tr>
          <tr>
            <th>{renderCublet(6)}</th>
            <th>{renderCublet(7)}</th>
            <th>{renderCublet(8)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )

};