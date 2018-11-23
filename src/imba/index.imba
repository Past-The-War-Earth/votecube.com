# ---------------------
# hack against tag duplication
# try to remove it and do several updates
if module:hot
    if document:body
        document:body:innerHTML = ''
    module:hot.accept
# ---------------------

console.log 'running'

tag App
    prop x default: Math.floor( Math.random * 300 )
    prop y default: Math.floor( Math.random * 300 )

    def testDynamicImport
        var testFunc = await import '../ts/test'
        window.alert testFunc

    def render
        <self css:top="{@y}px" css:left="{@x}px">
            <div#cube> 'Hello world'
            <button :tap.testDynamicImport> "Test Dynamic Import 2"

Imba.mount <App>