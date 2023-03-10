import { DirectiveBinding } from 'vue'

function isInViewport(el: HTMLElement) {
    // debugger
    const rect = el.getBoundingClientRect()
    return rect.top <= window.innerHeight && rect.bottom >= 0
}

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
