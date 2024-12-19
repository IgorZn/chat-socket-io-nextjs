const waitFor = Promise.resolve(() => setTimeout(() => console.log('done'), 1000))

console.log('start')

Array.from([1, 2, 3]).forEach(async i => {
	await waitFor.then(msg => msg())
})

console.log('end')
