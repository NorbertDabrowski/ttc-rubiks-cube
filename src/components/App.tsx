import { useState } from 'react';
import './App.css';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { CubeModel, createSolvedCube, rotateFace } from '../services/CubeService';
import { CubeExplodedView } from './CubeExplodedView/CubeExplodedView';
import { EFaceRotation } from '../shared/constants';

function App() {
  const [cube, setCube] = useState<CubeModel>(createSolvedCube());

  const onRotate = (rotation: EFaceRotation) => {
    setCube(rotateFace(cube, rotation));
  }

  return (
    <div className="App">
      <header>
        <h2>Rubik's Cube task</h2>
      </header>
      <CubeExplodedView cube={cube} />
      <ControlPanel onRotate={onRotate} />
    </div>
  );
}

export default App;
