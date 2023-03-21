import { DirectiveBinding } from 'vue'

// 监听元素是否在视口区域
function isInViewport(el: HTMLElement) {
    // 返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置。
    const rect = el.getBoundingClientRect()
    // window.innerHeight ：浏览器窗口的视口（viewport）高度（以像素为单位）；如果有水平滚动条，也包括滚动条高度。
    return rect.top <= window.innerHeight && rect.bottom >= 0
}

// 加载图片
function loadImage(el: HTMLImageElement, binding: DirectiveBinding) {
    const imgSrc = binding.value
    const img = new Image()
    img.src = imgSrc
    // debugger
    img.onload = () => {
        el.setAttribute('src', imgSrc)
        el.classList.remove('loading')
    }
}

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        el.classList.add('loading')
        if (isInViewport(el)) {
            loadImage(el as HTMLImageElement, binding)
        }
        window.addEventListener('scroll', () => {
            if (isInViewport(el)) {
                loadImage(el as HTMLImageElement, binding)
            }
        })
    },
    unmounted(el: HTMLElement) {
        window.removeEventListener('scroll', () => {
            if (isInViewport(el)) {
                loadImage(el as HTMLImageElement, binding)
            }
        })
    },
}
