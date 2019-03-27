<template>
  <div class="main">
    <a-form id="formLogin" class="user-layout-login" ref="formLogin" :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input size="large" type="text" placeholder="请输入邮件"
              v-decorator = "[
                'email',
                {rules: [
                  {required: true, message: '邮件不能为空'},
                  {type: 'email', message: '邮件格式错误！'}
                ]}
              ]"
              label="email"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input label="password"
               v-decorator = "[
                'password',
                {rules: [
                  {required: true, message: '密码不能为空'},
                  {type: 'string', min:6, max:20, message: '密码长度必须在6到20个字符'}
                ]}
              ]"
            size="large" type="password" autocomplete="false" placeholder="密码 ">
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>
      <a-form-item style="margin-top:24px">
        <a-button size="large" type="primary" htmlType="submit" class="login-button" :loading="loading" :disabled="loading">确定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { debug } from 'util'
export default {
  data () {
    return {
      form: this.$form.createForm(this),
      loading: false
    }
  },
  methods: {
    ...mapActions(['LoginByEmail']),
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (! err)  {
          this.loading = true
          this.LoginByEmail(values).then(() => {
            this.loading = false
            this.$router.push({path: this.redirect || '/'})
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main {
	height: 100vh;
}

.user-layout-login {
	width: 350px;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	label {
		font-size: 14px;
	}
}
// 	.getCaptcha {
// 		display: block;
// 		width: 100%;
// 		height: 40px;
// 	}
	
// 	.forge-password {
// 		font-size: 14px;
// 	}
	
	button.login-button {
		padding: 0 15px;
		font-size: 16px;
		height: 40px;
		width: 100%;
	}
	
	.user-login-other {
		text-align: left;
		margin-top: 24px;
		line-height: 22px;
		
		.item-icon {
			font-size: 24px;
			color: rgba(0, 0, 0, 0.2);
			margin-left: 16px;
			vertical-align: middle;
			cursor: pointer;
			transition: color 0.3s;
			
			&:hover {
				color: #1890ff;
			}
		}
		
		.register {
			float: right;
		}
	}
// }
</style>