var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from '@airport/direction-indicator';
let CubeLogic = class CubeLogic {
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
    getReasonDefault() {
        const defaultCubePositions = this.getDefaultCubePositions();
        return {
            1: this.getFactorPositionDefault(defaultCubePositions[0], defaultCubePositions[5]),
            2: this.getFactorPositionDefault(defaultCubePositions[1], defaultCubePositions[3]),
            3: this.getFactorPositionDefault(defaultCubePositions[2], defaultCubePositions[4])
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
};
CubeLogic = __decorate([
    Injected()
], CubeLogic);
export { CubeLogic };
//# sourceMappingURL=CubeLogic.js.map