<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
      >
        <el-form-item prop="username" class="item-form">
          <label for="">邮箱</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label for="">密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="12"
          ></el-input>
        </el-form-item>

        <el-form-item
          prop="passwords"
          class="item-form"
          v-show="model === 'register'"
        >
          <label for="">重复密码</label>
          <el-input
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            minlength="6"
            maxlength="12"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code" class="item-form">
          <label for="">验证码</label>
          <el-row :gutter="20">
            <el-col :span="16">
              <el-input
                v-model="ruleForm.code"
                minlength="6"
                maxlength="6"
              ></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="success">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="block login-btn"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import { stripscript, validateEmail, validatePass, validateCode } from '@/utils/validate';
export default {
  name: 'AppLogin',
  data () {
    var validateUsername = (rule, value, callback) => {

      if (value === '') {
        callback(new Error('请输入用户名'));
      } else if (validateEmail(value)) {
        callback(new Error("用户名格式有误"));
      }
      else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;

      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (validatePass(value)) {
        callback(new Error('秘密为6-20位数字+字母'));
      } else {
        callback();
      }
    };

    var validatePasswords = (rule, value, callback) => {
      if (this.model === 'login') { callback(); }
      this.ruleForm.passwords = stripscript(value);
      value = this.ruleForm.passwords;
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value != this.ruleForm.password) {
        callback(new Error('重复密码不正确'));
      } else {
        callback();
      }
    };

    var checkCode = (rule, value, callback) => {
      this.ruleForm.code = stripscript(value);
      value = this.ruleForm.code;

      if (value === '') {
        return callback(new Error('请输入验证码'));
      }
      else if (validateCode(value)) {
        return callback(new Error('验证码格式有误'));
      }
      else {
        callback();
      }
    };
    return {

      menuTab: [
        { txt: '登录', current: false, typeclick: 'login' },
        { txt: '注册', current: false, typeclick: 'register' }
      ],
      model: "login",
      ruleForm: {
        username: '',
        password: '',
        passwords: '',
        code: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        passwords: [
          { validator: validatePasswords, trigger: 'blur' }
        ],
        code: [
          { validator: checkCode, trigger: 'blur' }
        ]
      }
    };
  },

  created () { },
  onMounted () { },
  methods: {
    toggleMenu (data) {
      this.menuTab.forEach((elem, index) => {
        elem.current = false;
      });
      data.current = true;
      this.model = data.typeclick;
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}


</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: rgb(52, 74, 95);
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }
}
.current {
  background-color: rgba($color: #000000, $alpha: 0.1);
}
.login-form {
  margin-top: 29px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: white;
  }
}
.item-form {
  margin-top: 13px;
}
.block {
  width: 100%;
  display: block;
}
.login-btn {
  margin-top: 25px;
}
</style>
