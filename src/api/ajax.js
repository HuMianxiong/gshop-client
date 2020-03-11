/*
   
    能发送ajax的函数（axios） 函数的返回值是promise
    //请求拦截器做什么
    1.处理post请求的请求体参数：转换为urlencode格式（默认用的json格式）：请求拦截器
    2.让成功的结果不是response，而是response.data：响应拦截器的成功回调
    3.统一处理请求错误：响应拦截器的失败回调
*/
import axios from 'axios'  //引入axios
import qs from 'qs'

// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 20000 //请求超时的时间20s

//有两种类型的拦截器 一种请求一种响应
//在请求拦截器里面一般写成功的回调
//回调函数的参数是什么
//添加请求拦截器
axios.interceptors.request.use(config=>{
    //method 请求的方式 data post请求体的数据对象
    const {method,data} = config
    //处理大小写问题 和判断post请求体是否是对象
    if(method.toUpperCase()=='POST' && data instanceof Object){
        config.data = qs.stringify(data)//转化为urlcode的stringify，然后覆盖掉原本的data

    }
    return config;//结构先摆好，没有config发不了请求
})

//添加响应拦截器
axios.interceptors.response.use(response=>{
   // 2.让成功的结果不是response，而是response.data：响应拦截器的成功回调
   return response.data 
   //3.统一处理请求错误：响应拦截器的失败回调

},error=>{
    alert('请求异常：'+error.message)
    //中断promise链
    //Promise()需要传东西 不传东西会报错 传空函数 里面没有改变他的状态  不改变状态就是一个pending的状态 pending状态下不去 就下面的回调函数不会调用，因为下面是成功还是失败的回调函数，既不成功也不失败，那就断了

    return new Promise(()=>{

    })
    // return Promise.error(error)//不这么写
    //只要没有抛异常，只要没有返回一个失败的promise，那后面必然成功的，跟当前是成功的回调还是失败的回调没有关系
    //当前的是成功的回调还是失败的回调只是上一个promise引起的 
})
export default axios //最后暴露 的依然是axios，只是中间要做拦截器处理
