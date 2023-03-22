import { defineRule } from 'vee-validate'
import { required, regex } from '@vee-validate/rules'

// todo
export default {
    mounted(el, binding) {
        const { value } = binding
        debugger
        Object.keys(value).forEach((rule) => {
            switch (rule) {
                case 'required':
                    debugger
                    defineRule(rule, required)
                    // debugger
                    break
                case 'regex':
                    defineRule(rule, regex)
                    break
                // 可以自行添加其他规则
            }
        })
    }
}

