
function fn (n) {
  for (var i = 1; i <= n; i++) {
    (function (i) {
      setTimeout(() => console.log(i), 1000 * i)
    }(i))
  }
}
fn(10)
