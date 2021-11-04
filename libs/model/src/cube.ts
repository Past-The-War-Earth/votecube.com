export interface ICubePosition {
	axis: 'x' | 'y' | 'z'
	dir: -1 | 1
}

export interface ICubeFactorPositionDefault {
	axis: 'x' | 'y' | 'z'
	positions: {
		A: {
			dir: -1 | 1
		},
		B: {
			dir: -1 | 1
		},
	}
}

export interface ICubeSituationFactorPositionDefault {
	1: ICubeFactorPositionDefault
	2: ICubeFactorPositionDefault
	3: ICubeFactorPositionDefault
}
