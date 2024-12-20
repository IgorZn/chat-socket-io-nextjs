const waitFor = Promise.resolve((msg: string) => console.log(msg))

console.log('start')

Array.from([1, 2, 3]).forEach(async i => {
	await waitFor.then(msg => msg(i.toString()))
})

console.log('end')
