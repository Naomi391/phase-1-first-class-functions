function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  function namedFunction() {}
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
