// files system
const {readFile, writeFile}=require("fs")
console.log('start')

// phải sử dụng callback function để xử lý file sau khi nhận, utf8: decode file
// callback hell
readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err)
    return
	}
	
  const first = res
  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err)
      return
	  }
	  
    const second = res
    writeFile(
      "./content/result-async.txt",
      `Here is the async result: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err)
          return
		  }
		  console.log('done with this task')
      }
    )
  })
})


console.log('starting next task')