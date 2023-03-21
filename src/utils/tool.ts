import { v4 as uuidv4 } from 'uuid';

//要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = ()=>{
  //先从本地存储获取uuid（看一下本地存储里面是否有）
  let uuid_token = localStorage.getItem('UUIDTOKEN');
  //如果没有
  if(!uuid_token){
      //我生成游客临时身份
     uuid_token = uuidv4();
     //本地存储存储一次
     localStorage.setItem('UUIDTOKEN',uuid_token);
  }
  //切记有返回值,没有返回值undefined
  return uuid_token;
}


export const setToken = (token) => {
  localStorage.setItem('TOKEN', token);
}

export const removeToken = () => {
  localStorage.removeItem("TOKEN")
}

export const getToken = () => {
  localStorage.getItem("TOKEN")
}

/**
 * 
 * @param fn 
 * @param wait
 */
export const throttle = (fn, wait = 0) => {
  let timerId
  let lastInvoke = Number.MIN_SAFE_INTEGER //上次调用时间

  return function (...args) {
    // 当前时间
    const curTime = new Date().getTime()
    // 距离下次执行的剩余时间
    const remain = Math.max(lastInvoke + wait - curTime, 0)
    // 更新定时器，确保同一时间只有一个定时器在运行
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      lastInvoke = new Date().getTime()
      fn(...args)
    }, remain)
  }
}