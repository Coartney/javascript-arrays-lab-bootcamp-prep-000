const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function appendKitten(name){
  return kittens.concat(name)
}
function prependKitten(name){
  var prependKitten = [name, ...kittens];
  return prependKitten
}
function removeLastKitten(){
  var removeLastKitten = kittens.slice(-1)
  return removeLastKitten
}