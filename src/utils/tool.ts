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

export const schema = {
    // 校验account
    account(value) {
        if (!value) return '请输入用户名'
        return true
    },
    password(value) {
        if (!value) return '请输入密码'
        if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
        return true
    },
    mobile(value) {
        if (!value) return '请输入手机号'
        if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
        return true
    },
    code(value) {
        if (!value) return '请输入验证码'
        if (!/^\d{6}$/.test(value)) return '验证码是6个数字'
        return true
    },
    isAgree(value) {
        if (!value) return '请勾选同意用户协议'
        return true
    }
}

