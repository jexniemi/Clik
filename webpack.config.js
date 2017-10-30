const path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './index.js',
 ],
 output: {
   path: path.join(__dirname, 'public'),
   filename: 'bundle.js',
 },
 module: {
   rules: [
     {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:
          {
            presets:['react']
          }
     },
   ],
 },
 resolve: {
   modules: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};