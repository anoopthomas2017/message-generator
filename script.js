//alert("hai")

const subs = ['Anoop', 'Bibin', 'Joji', 'Alan']
const verbs = ['likes', 'hates', 'loves', 'eats']
const objs = ['apples', 'bananas', 'chocolates', 'dates']
function generateMessage() {
  //console.log("new message");
  let ranSub = subs[Math.floor(Math.random() * subs.length)]
  let ranVerb = verbs[Math.floor(Math.random() * verbs.length)]
  let ranObjs = objs[Math.floor(Math.random() * objs.length)]

  let msg = ranSub + ' ' + ranVerb + ' ' + ranObjs + '.'
  console.log(msg)
  document.getElementById('msg').textContent = msg;
}
generateMessage()