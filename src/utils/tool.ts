import Cookies from 'js-cookie'

/**
 * @description 当裁剪后的大小小于原图时 正常裁剪
 * @description 当裁剪后的大小大于原图时 isClip = false 默认不缩放不裁剪 isClip = true 裁剪不缩放
 * @param url 原图地址
 * @param width 裁剪后的宽
 * @param height 裁剪后的高
 * @param isClip 是否裁剪
 * @param isWebp 是否要用webp
 * @returns {string|*} 裁剪后的图片地址
 */
export function slimImg({
  url,
  width,
  height,
  isClip,
  isWebp = true
}) {
  // debugger
  if (!url) {
    // debugger
    return url;
  }
  // check base64
  if (url.indexOf('data:image') === 0) {
    return url;
  }
  const formatUrl = url.replace(/^https?:/, '');
  // debugger
  const params = [];
  //
  if (width && height) {
    params.push(`${width}w_${height}h_1e_1c_100q`);
  }
  isClip && params.push('1f');
  let res = `${formatUrl}${params.length || (isWebp && isSupportWebp) ? '@' : ''}${params.join('_')}${isWebp && isSupportWebp ? '.webp' : ''}`;
  // debugger
  return res
}

export const isSupportWebp = (function () {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch (err) {
    return false;
  }
}());

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