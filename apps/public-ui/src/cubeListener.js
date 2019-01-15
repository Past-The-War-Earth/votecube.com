import {startResizeInterval, stopResizeInterval} from './resizer.js'

export function setupCubeListener(
    page,
    viewCallback
) {
    import('@votecube/cube-logic/lib/cube/eventListener').then((
        cubeListener
    ) => {
        page.set({cubeListener})

        setCubeViewPort(
            cubeListener,
            page.store.get().currentValue,
            (
                mutationApi
            ) => {
                page.set({mutationApi})
            },
            (
                currentValue
            ) => {
                page.store.set({currentValue})
            },
        )
    })
    // startResizeInterval(page, viewCallback)
}

export function shutDownCubeListener(
    cubeListener,
    page
) {
    // stopResizeInterval(page)
    setCubeViewPort(
        cubeListener,
        null,
        (
            mutationApi
        ) => {
            page.set({mutationApi})
        }
    )
}

export function setCubeAdjustment(
    cubeListener,
    enableCubeAdjustment
) {
    if(enableCubeAdjustment) {
        cubeListener.addCubeAdjustment()
    } else {
        cubeListener.clearCubeAdjustment()
    }
}

function setCubeViewPort (
    cubeListener,
    data,
    setMutationApi,
    callback
) {
    setMutationApi(cubeListener.setViewPort(true, data, callback))
}