const express = require("express");

const app = express();
const port = 3099;

app.get("/", (req, res) => {
  res.send(`
    <style>
      #main {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    </style>
    <div id="main">
      <div>
        <h1>ณัฐพงศ์ ยะลา รหัสนักศึกษา 6504305001316</h1>
        <h1>กวินพัฒน์ ช่วยอยู่ รหัสนักศึกษา 6504305001352</h1>
      </div>
    </div>
    <script>
      const div = document.querySelector('#main')
      let r,g,b
      function randomColor() {
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)
        div.style.backgroundColor = 'rgb('+ [r,b,g].join(',') +')'
      }
      setInterval(randomColor, 200)
    </script>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
