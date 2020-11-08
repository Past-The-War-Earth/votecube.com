import { DI } from '@airport/di';
import { CUBE_LOGIC } from '../tokens';
export class CubeLogic {
    getDefaultCubePositions() {
        return [{
                axis: 'x',
                dir: 1
            }, {
                axis: 'y',
                dir: 1
            }, {
                axis: 'z',
                dir: 1
            }, {
                axis: 'y',
                dir: -1
            }, {
                axis: 'z',
                dir: -1
            }, {
                axis: 'x',
                dir: -1
            }];
    }
    getPollFactorPositionDefault() {
        const dcp = this.getDefaultCubePositions();
        return {
            1: this.getFactorPositionDefault(dcp[0], dcp[5]),
            2: this.getFactorPositionDefault(dcp[1], dcp[3]),
            3: this.getFactorPositionDefault(dcp[2], dcp[4])
        };
    }
    shutDownCubeListener(cubeEventListener) {
        // stopResizeInterval(page)
        this.setCubeViewPort(cubeEventListener, (mutationApi) => {
            // Nothing to do
        }, null);
        cubeEventListener.setPositionData(null);
    }
    setCubeAdjustment(cubeEventListener, enableCubeAdjustment) {
        if (enableCubeAdjustment) {
            cubeEventListener.addCubeAdjustment();
        }
        else {
            cubeEventListener.clearCubeAdjustment();
        }
    }
    setCubeViewPort(cubeEventListener, setMutationApi, callback) {
        const mutationApi = cubeEventListener.setViewPort(true, callback);
        setMutationApi(mutationApi);
    }
    getFactorPositionDefault(cubePosition1, cubePosition2) {
        return {
            axis: cubePosition1.axis,
            positions: {
                A: {
                    dir: cubePosition1.dir
                },
                B: {
                    dir: cubePosition2.dir
                },
            }
        };
    }
}
DI.set(CUBE_LOGIC, CubeLogic);
//# sourceMappingURL=CubeLogic.js.map