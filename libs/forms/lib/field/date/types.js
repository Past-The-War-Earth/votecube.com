export function utcNow() {
    const nowLocal = new Date();
    return new Date(Date.UTC(nowLocal.getFullYear(), nowLocal.getMonth(), nowLocal.getDate()));
}
//# sourceMappingURL=types.js.map