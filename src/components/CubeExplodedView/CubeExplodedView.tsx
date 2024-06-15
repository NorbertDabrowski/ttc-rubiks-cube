import { CubeFace } from "../CubeFace/CubeFace";
import { CubeModel } from "../../services/CubeService";

export interface IProps {
  cube: CubeModel;
}

export const CubeExplodedView = (props: IProps) => {
  return (
    <div>
      <table className="center">
        <tbody>
          <tr>
            <td></td>
            <td><CubeFace cublets={props.cube.faceUp} /></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><CubeFace cublets={props.cube.faceLeft} /></td>
            <td><CubeFace cublets={props.cube.faceFront} /></td>
            <td><CubeFace cublets={props.cube.faceRight} /></td>
            <td><CubeFace cublets={props.cube.faceBack} /></td>
          </tr>
          <tr>
            <td></td>
            <td><CubeFace cublets={props.cube.faceDown} /></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )

};