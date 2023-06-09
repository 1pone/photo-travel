import path from 'path'

export default {
  babel: {
    presets: []
  },
  devServer: {
    client: {
      overlay: false
    },
    port: 3000,
    open: false
  },
  typescript: {
    enableTypeChecking: false
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, './src/components')
    },
    // 以下代码！！！  与alias或babel同级
    configure: (webpackConfig: { output: any }, { env, paths }: any) => {
      // 修改build的生成文件名称
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      }

      return webpackConfig
    }
  }
}
