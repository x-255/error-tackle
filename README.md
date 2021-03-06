# error-tackle

## 基础用法

```javascript
import { createTackle } from 'error-tackle'

// 简单的初始化这样就可以了
createTackle()

// 也可以传入options配置,配置具体信息看下面的TackleOptions
createTackle({
  // some options
})
```

### TackleOptions

| 参数          | 说明                                                       | 类型                   | 默认值 |
| ------------- | ---------------------------------------------------------- | ---------------------- |------------------|
| url           | 上报信息的接口地址                                         | `string`               | "" |
| method        | 上报信息的请求方式                                         | `"GET"\|"POST"\|"IMG"` | "IMG" |
| jsError       | 是否监听js错误（TypeError、ReferenceError等）              | `boolean`              | true  |
| promiseError  | 是否监听promise错误                                        | `boolean`              | true |
| resourceError | 是否监听资源错误                                           | `boolean`              | true  |
| consoleError  | 是否监听console.error错误                                  | `boolean`              | false |
| ajaxError     | 是否监听ajax错误 （xmlHttpRequest、fetch）                 | `boolean`              | true |
| vueError      | 是否监听vue错误                                            | `boolean`              | false |
| vueApp        | vue应用实例                                                | `VueApp`               | undefined |
| coverError    | 是否阻止错误继续向上传播                                   | `boolean`              | false |
| logError      | 是否在控制台打印错误（如果要打印则需要coverError也为true） | `boolean`              | false |
| extendsData   | 上报信息需要额外携带的数据                                 | `any`                  | null |
| onError       | 捕获到错误时会执行的方法                                   | `onError`              | undefined |

### onError

| 参数 | 说明     | 类型        |
| ---- | -------- | ----------- |
| info | 错误信息 | `ErrorInfo` |
| `--` | 返回值   | `void`      |

### ErrorInfo

最终获取的错误信息如下，某些错误类型会有部分信息无法获取到，比如资源错误无法获取报错源信息，那就没有 source、name、lineno、colno。

| 参数        | 说明                       | 类型           | 一定包含 |
| ----------- | -------------------------- | -------------- | -------- |
| type        | 错误类型                   | `string`       | 是       |
| error       | 捕获的 error 本体          | `any`          | 是       |
| message     | 报错信息                   | `string`       | 是       |
| source      | 错误源文件                 | `string`       | 否       |
| name        | 报错误所在的方法名         | `string`       | 否       |
| lineno      | 错误所在行                 | `number`       | 否       |
| colno       | 错误所在列                 | `number`       | 否       |
| datatime    | 出现错误的时间             | `string`       | 是       |
| extendsData | 自定义上报时额外携带的参数 | `any`          | 否       |
| userAgent   | 用户设备信息               | `UserAgentObj` | 是       |

### UserAgentObj

| 参数           | 说明         | 类型     |
| -------------- | ------------ | -------- |
| browserName    | 浏览器名称   | `string` |
| browserVersion | 浏览器版本   | `string` |
| osName         | 操作系统名称 | `string` |
| osVersion      | 操作系统版本 | `string` |
| deviceName     | 设备名称     | `string` |
