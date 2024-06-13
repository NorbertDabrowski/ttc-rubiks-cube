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
            <th></th>
            <th><CubeFace cublets={props.cube.faceUp} /></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th><CubeFace cublets={props.cube.faceLeft} /></th>
            <th><CubeFace cublets={props.cube.faceFront} /></th>
            <th><CubeFace cublets={props.cube.faceRight} /></th>
            <th><CubeFace cublets={props.cube.faceBack} /></th>
          </tr>
          <tr>
            <th></th>
            <th><CubeFace cublets={props.cube.faceDown} /></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  )

};