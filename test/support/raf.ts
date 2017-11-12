(global as any).requestAnimationFrame = function (callback: Function) {
  setTimeout(callback, 0)
}
