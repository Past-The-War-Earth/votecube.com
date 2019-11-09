export function convertCommonFactorProps(
	pollFp,
	uiPfp
) {
	pollFp.from([uiPfp, 'axis']).to(['axis']).set()
	pollFp.from([uiPfp, 'color']).to(['color']).set((
		color
	) => {
		color.fromTo(['blue']).set()
		color.fromTo(['green']).set()
		color.fromTo(['red']).set()
	})
}