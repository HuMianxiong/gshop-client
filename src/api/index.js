/* 
包含多个接口请求函数的模块
函数的返回值是promise对象
*/
import ajax from './ajax'

const BASE = '/api'
const BASE2 = '/baidu'

/*eslint-disable no-console */
/*
1.根据经纬度获取位置详情
*/
export const reqAddress = (longitude,latitude)=>ajax({
    method:'GET',//可以不写
    url:BASE+`/position/${latitude},${longitude}`
})

/*
2.获取食品分类列表
 */
export const reqCategorys = ()=>ajax.get( BASE +'/index_category')

/*
3.根据经纬度获取商铺列表
*/
export const reqShops = ({latitude,longitude})=>ajax({
    url: BASE +'/shops',
    params:{
        latitude,
        longitude
    }
})

export const reqBaiDuXXx=()=>ajax( BASE2 +'/xxx')

// reqAddress('116.36867','40.10038').then((result)=>{
//     console.log('result',result)
// })
