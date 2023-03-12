import { defineRule } from 'vee-validate'
import { required, regex } from '@vee-validate/rules'

export default function (app) {
    app.directive('validate', {
        mounted(el, binding) {
            const { value } = binding
            // debugger
            Object.keys(value).forEach((rule) => {
                switch (rule) {
                    case 'required':
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
    })
}
