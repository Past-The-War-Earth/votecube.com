export const WatchType = {
	MULTILINE_FIELD: 1
}

const watches = []

setInterval(() => {
	for (const watch of watches) {
		watch.callback(watch)
	}
}, 100)

export function removeWatch(
	component,
	watchType
) {
	for (let index = watches.length - 1; index >= 0; index--) {
		const watch = watches[index]
		if (watch.component === component
			&& (!watchType || watch.type === watchType)) {
			watches.splice(index, 1)
		}
	}
}

export function watchMultilineField(
	component,
	field
) {
	watches.push({
		callback: (
			watch
		) => {
			const dropdownTopPx = watch.field.offsetHeight + 6
			// const sizeDiff = watch.field.clientWidth - watch.selectionSizer.clientWidth
			if (watch.dropdownTopPx !== dropdownTopPx
			// || watch.sizeDiff !== sizeDiff
			) {
				// alert('dropdownTopPx: ' + dropdownTopPx)
				// setTimeout(() => {
				watch.dropdownTopPx = dropdownTopPx
				watch.component.set({dropdownTopPx})
				// watch.component.set({dropdownTopPx, sizeDiff})
				// }, 16)
			}
		},
		component,
		field,
		// selectionSizer,
		type: WatchType.MULTILINE_FIELD
	})
}

