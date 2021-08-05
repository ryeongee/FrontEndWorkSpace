var express = require('express');
var cors = require('cors');
var app = express();
var router = require('./router')(app);
const port = 8000;

// HTML 파일을 해석하려면 EJB 등의 템플릿 엔진이 필요.
// https://bcho.tistory.com/887 읽어보길 추천
app.set('views', __dirname + '/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Cross-Origin Resource Sharing 처리해주는 모듈 추가. 수동으로도 설정 가능
// https://evan-moon.github.io/2020/05/21/about-cors/ 읽어보길 추천
app.use(cors());

// css, js 등의 static file 들을 public 폴더에 모아놓기
// https://expressjs.com/ko/starter/static-files.html 읽어보길 추천
app.use(express.static('public'));

// 서버 시작
app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`)
});
