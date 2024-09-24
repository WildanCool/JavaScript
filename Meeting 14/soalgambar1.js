// Soal 1 GDrive
function simulateDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay Fiished!");
    }, 2000);
  });
}

async function hasil() {
  var hsl = await simulateDelay();
  console.log(hsl);
}

hasil();