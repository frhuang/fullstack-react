import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import express from 'express';
import falcorServer from 'falcor-express'
import bodyParser from 'body-parser'
import Router from './server/router'


const compile = webpack(config);
var app = new express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(webpackDevMiddleware(compile, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compile, {}));

app.use(express.static(__dirname + '/'));

app.use('/model.json', falcorServer.dataSourceRoute((req, res) => new Router(req.body.jsonGraph)));

app.listen(3000, err => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('listening at localhost:3000');
});
