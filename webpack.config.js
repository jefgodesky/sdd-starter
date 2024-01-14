import { resolve } from 'path'

export default {
  entry: './scripts/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: resolve(process.cwd(), 'scripts'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    cacheWithContext: false,
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: resolve(process.cwd(), 'dist/scripts')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
