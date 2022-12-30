console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...args) {
  args[1] = args[1]
    .replace(/\&/g, "&amp;")
    .replace(/\'/g, "&apos;")
    .replace(/\"/g, "&quot;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;");

  args[2] = args[2]
    .replace(/\&/g, "&amp;")
    .replace(/\'/g, "&apos;")
    .replace(/\"/g, "&quot;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;");

  return `<b>${args[1]} says</b>: "${args[2]}"`;
}
