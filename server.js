import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import express from 'express';
import falcorServer from 'falcor-express'
import bodyParser from 'body-parser'
import router from './server/router'


const compile = webpack(config);
config.entry.index.push('webpack-hot-middleware/client');

var app = new express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/model.json', falcorServer.dataSourceRoute(() => new router()));

app.use(webpackDevMiddleware(compile, {
    noInfo: true
}));

app.use(webpackHotMiddleware(compile, {}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/build/index.html')
});

app.use(express.static('build'));
app.listen(3000, err => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('listening at localhost:3000');
});