/* EVENTS */
const EventEmitter=require('events');
const customEmitter=new EventEmitter();

// event.emit: se dua ra respons dua vao thu tu,neu de o tren cung -> nothing happen
// de cuoi thi se tra ve response cua 2 event.on, de giua thi tra ve res cua func dung truoc event.emit

customEmitter.on('response', (name, id) => {
	console.log(`data recieved name-${name}, id-${id}`)
})

customEmitter.on('response', () => {
	console.log('some other logic here')
})
customEmitter.emit('response', 'john', 34)