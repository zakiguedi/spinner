const spinner2 = ['|', '/', '-', '\\', '-', '-', '-'];
for (let i = 0; i < spinner2.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner2[i]}`);
  }, i * 200);
}