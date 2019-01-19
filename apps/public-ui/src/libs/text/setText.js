export function setText(
    store,
    textString
) {
    const text = JSON.parse(textString)
    store.set({
        text: {
            ...store.get().text,
            ...text
        }
    })
}